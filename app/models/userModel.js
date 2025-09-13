import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { 
      type: String, 
      enum: ["admin", "manager", "user"], 
      default: "user" 
    },
  },
  { timestamps: true }
);

// ✅ Fix OverwriteModelError
export default mongoose.models.User || mongoose.model("User", userSchema);
