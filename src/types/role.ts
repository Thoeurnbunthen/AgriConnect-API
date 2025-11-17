import { Document } from "mongoose";

export interface IRole extends Document {
  _id: string;
  userId: Object;
  name: string; // e.g., "admin", "farmer", "customer"
  createdAt: Date;
  updatedAt: Date;
}
