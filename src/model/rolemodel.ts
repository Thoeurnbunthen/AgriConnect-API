import mongoose, { Schema, Document } from "mongoose";

export interface IRole {
  name: string; // e.g., "admin", "farmer", "customer"
}

export interface IRoleDocument extends IRole, Document {}

const RoleSchema: Schema<IRoleDocument> = new Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const RoleModel = mongoose.model<IRoleDocument>("Role", RoleSchema);
