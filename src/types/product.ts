import { Types } from "mongoose";

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;

  userId: Types.ObjectId;
}
