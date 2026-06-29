import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

// Only use CORS once with proper configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local dev frontend
      "https://your-frontend.vercel.app", // deployed frontend
    ],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/product", productRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB successfully connected"))
  .catch((error) => {
    console.error("Error in MongoDB connection:", error);
  });

// Test route
app.get("/", (req, res) => res.send("Hello World!"));

// If running locally (node server.js), start listening.
if (process.env.VERCEL_ENV !== "production") {
  app.listen(port, () => console.log(`Server running on port ${port}`));
}

export default app;
