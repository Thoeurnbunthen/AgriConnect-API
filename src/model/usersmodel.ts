import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "@/types/userType";

export interface IUserDocument extends IUser, Document {}

const UserSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<IUserDocument>("User", UserSchema);
