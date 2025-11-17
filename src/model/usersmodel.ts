import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "@/types/userType";

export interface IUserDocument extends IUser, Document {}

const UserSchema: Schema<IUserDocument> = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    role: [{ type: Schema.Types.ObjectId, ref: "Role", required: true }],
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<IUserDocument>("User", UserSchema);
