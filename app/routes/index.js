const express = require("express");
const connectDB = require("./config/dbConnection");

const userRoutes = require("./routes/userRoutes");
const customerRoutes = require("./routes/customerRoutes");
const caseRoutes = require("./routes/caseRoutes");

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/cases", caseRoutes);

// Connect DB & Start Server
connectDB();
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
