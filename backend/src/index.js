import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import paperRoutes from "./routes/paperRoutes.js";
import authRoutes from "./routes/authRoutes.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// ✅ Create the Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/papers", paperRoutes);
app.use("/api/auth", authRoutes);

// Port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
