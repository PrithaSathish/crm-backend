import Case from "../models/caseModel.js";
import Customer from "../models/customerModel.js";
import User from "../models/userModel.js";

export const createCase = async (req, res) => {
  try {
    const { title, description, customerId, assignedTo, priority, status } = req.body;

    if (!title || !description || !customerId) {
      return res.status(400).json({ success: false, message: "title, description and customerId are required" });
    }

    const customer = await Customer.findById(customerId);
    if (!customer) return res.status(400).json({ success: false, message: "Invalid customerId" });

    if (assignedTo) {
      const user = await User.findById(assignedTo);
      if (!user) return res.status(400).json({ success: false, message: "Invalid assignedTo userId" });
    }

    const newCase = await Case.create({ title, description, customerId, assignedTo, priority, status });
    res.status(201).json({ success: true, data: newCase });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const listCases = async (_req, res) => {
  try {
    const cases = await Case.find()
      .populate("customerId", "name contactInfo status")
      .populate("assignedTo", "username email role")
      .sort({ createdAt: -1 });

    res.json({ success: true, data: cases });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getCaseById = async (req, res) => {
  try {
    const foundCase = await Case.findById(req.params.id)
      .populate("customerId", "name contactInfo status")
      .populate("assignedTo", "username email role");

    if (!foundCase) return res.status(404).json({ success: false, message: "Case not found" });

    res.json({ success: true, data: foundCase });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateCase = async (req, res) => {
  try {
    const updatedCase = await Case.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedCase) return res.status(404).json({ success: false, message: "Case not found" });

    res.json({ success: true, data: updatedCase });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteCase = async (req, res) => {
  try {
    const deletedCase = await Case.findByIdAndDelete(req.params.id);

    if (!deletedCase) return res.status(404).json({ success: false, message: "Case not found" });

    res.json({ success: true, message: "Case deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
