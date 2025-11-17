import mongoose, { Schema } from "mongoose";
import { IRole } from "@/types/role";

const roleModel = new Schema<IRole>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true, unique: true }, // e.g., "admin", "farmer", "customer"
  },
  { timestamps: true }
);

export const RoleModel = mongoose.model<IRole>("Role", roleModel);
