import express from "express";
import Joi from "joi";
import User from "../Model/UserModel.js";

const userRoutes = express.Router();

const registerSchema = Joi.object({
  name: Joi.string().min(3).max(24).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(), 
  age: Joi.number().positive().min(8).max(100).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

userRoutes.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      message: "Successfully got users.",
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      users: null,
    });
  }
});

userRoutes.post("/login", async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error)
    return res.status(400).json({ message: error.details[0].message });

  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    if (user.password !== req.body.password)
      return res.status(400).json({ message: "Invalid email or password" });

    res.json({
      message: "Login successful",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Error during login" });
  }
});


userRoutes.post("/", async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error)
    return res.status(400).json({ message: error.details[0].message });

  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser)
      return res.status(400).json({ message: "User with this email already exists!" });

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json({
      message: "Successfully created user",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in creating user!" });
  }
});

userRoutes.put("/:id", async (req, res) => {
  const { id } = req.params;

  if (!req.body || Object.keys(req.body).length === 0)
    return res.status(400).json({ message: "Invalid data for updating user!" });

  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser)
      return res.status(404).json({ message: `User not found with id ${id}` });

    res.json({
      message: `Successfully updated user id ${id}`,
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in updating user!" });
  }
});


userRoutes.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await User.findById(id);

    if (!findUser)
      return res.status(404).json({ message: "User doesn't exist with this id." });

    await User.deleteOne({ _id: id });

    res.json({ message: "Successfully deleted the user." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default userRoutes;
