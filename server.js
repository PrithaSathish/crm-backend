import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./app/routes/userRoutes.js";  // ✅ now works

dotenv.config();
const app = express();

app.use(express.json());

// routes
app.use("/api/users", userRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
