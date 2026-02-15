import express from "express";
import Product from "../Model/ProductModel.js";

const router = express.Router();

// CREATE PRODUCT
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET PRODUCTS (WITH CATEGORY FILTER)
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;

    let filter = {};

    if (category && category !== "All") {
      filter.category = category;
    }

    const products = await Product.find(filter);

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
