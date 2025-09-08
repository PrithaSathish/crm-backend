import Customer from "../models/customerModel.js";

// @desc    Create a customer
// @route   POST /api/customers
export const createCustomer = async (req, res) => {
  try {
    const { name, contactInfo, status } = req.body;
    const customer = await Customer.create({ name, contactInfo, status });
    res.status(201).json({ success: true, data: customer });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all customers
// @route   GET /api/customers
export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json({ success: true, data: customers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get customer by ID
// @route   GET /api/customers/:id
export const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ success: false, message: "Customer not found" });
    res.json({ success: true, data: customer });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update customer
// @route   PUT /api/customers/:id
export const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!customer) return res.status(404).json({ success: false, message: "Customer not found" });
    res.json({ success: true, data: customer });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete customer
// @route   DELETE /api/customers/:id
export const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) return res.status(404).json({ success: false, message: "Customer not found" });
    res.json({ success: true, message: "Customer deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
