import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["tshirt", "shirt", "hoodie", "jeans", "jacket", "accessories"],
    },

    brand: {
      type: String,
      default: "Generic",
    },

    images: {
      type: [String],
      required: true,
      default: [], // ensures array exists even if not provided
    },

    sizes: {
      type: [String],
      enum: ["XS", "S", "M", "L", "XL", "XXL"],
      default: [], // empty array if not provided
    },

    colors: {
      type: [String],
      default: [],
    },

    stock: {
      type: Number,
      required: true,
      default: 0,
    },

    rating: {
      type: Number,
      default: 0,
    },

    numReviews: {
      type: Number,
      default: 0,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
