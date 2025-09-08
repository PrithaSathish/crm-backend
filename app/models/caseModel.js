import mongoose from "mongoose";

const caseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    priority: { type: String, enum: ["Low", "Medium", "High"], default: "Medium" },
    status: { type: String, enum: ["Open", "In Progress", "Closed"], default: "Open" },
  },
  { timestamps: true }
);

const Case = mongoose.model("Case", caseSchema);
export default Case;
