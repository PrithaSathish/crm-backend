import express from "express";
import dotenv from "dotenv";
import connectDB from "./app/config/db.js";

import userRoutes from "./app/routes/userRoutes.js";
import customerRoutes from "./app/routes/customerRoutes.js";
import caseRoutes from "./app/routes/caseRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/cases", caseRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Server start
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
