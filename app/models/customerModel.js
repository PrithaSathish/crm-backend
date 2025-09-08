import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInfo: { type: String, required: true },
  status: { type: String, default: "active" }
}, { timestamps: true });

export default mongoose.model("Customer", customerSchema);
