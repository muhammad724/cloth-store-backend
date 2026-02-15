import express from "express";
import mongoose from "mongoose";
import User from "../Model/UserModel.js";

const userRoutes = express.Router();

// GET all users
userRoutes.get('/', async (req, res) => { 
    try {
        const users = await User.find(); // You were returning the model itself
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

// CREATE a new user
userRoutes.post("/", async (req,res)=>{
    const {name , email , age } = req.body;
    if (!name || !age || !email){
        return res.status(400).json({
            message:'Invalid data for creating user!',
        });
    }

    try {
        let newUser = new User(req.body);
        await newUser.save(); 

        res.json({
            message: 'Successfully created user',
            user: newUser,
        });
    } catch (error) {
        console.log(error)
        if (error.code === 11000) {
            return res.status(400).json({
                message: 'User with this email already exists!',
            });
        }

        res.status(500).json({
            message: 'Error in creating user!',
        });
    }
});

// UPDATE user by ID
userRoutes.put('/:id', async (req, res) => { 
    const { id } = req.params;
    if (!req.body) { 
        return res.status(400).json({
            message: 'Invalid data for updating user!',
        });
    }

    try {
        let updatedUser = await User.findByIdAndUpdate(id, { ...req.body }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: `User not found with id ${id}` });
        }

        res.json({
            message: `Successfully updated user id ${id}`,
            user: updatedUser,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error in updating user!',
        });
    }
});

// DELETE user by ID
userRoutes.delete('/:id', async(req,res)=>{
   try {
        const { id } = req.params;
        let findUser = await User.findById(id);

        if (!findUser) {
            return res.status(404).json({
                message: "User doesn't exist with this id.",
            });
        }

        await User.deleteOne({ _id: id });

        res.json({
            message: "Successfully deleted the user.",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

export default userRoutes;
