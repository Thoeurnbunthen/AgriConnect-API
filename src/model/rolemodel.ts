import mongoose, { Schema } from "mongoose";
import { IRole } from "@/types/role";

interface IRoleModel extends IRole {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
}

const roleSchema = new Schema<IRoleModel>(
  {
    name: { type: String, required: true, unique: true }, // e.g., "admin", "farmer", "customer"
    des: { type: String },
  },
  { timestamps: true }
);

export const RoleModel = mongoose.model<IRoleModel>("Role", roleSchema);
