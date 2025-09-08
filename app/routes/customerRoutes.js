import express from "express";
import {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer
} from "../controllers/customerController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create customer
router.post("/", protect, createCustomer);

// Get all customers
router.get("/", protect, getCustomers);

// Get one customer
router.get("/:id", protect, getCustomerById);

// Update customer
router.put("/:id", protect, updateCustomer);

// Delete customer
router.delete("/:id", protect, deleteCustomer);

export default router;
