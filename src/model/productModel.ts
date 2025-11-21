import { IProduct } from "@/types/product";
import mongoose, { Schema } from "mongoose";

export interface IProductModel extends IProduct, Document {
  _id: mongoose.Types.ObjectId;
}

const productSchema = new Schema<IProductModel>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model<IProductModel>(
  "Product",
  productSchema
);
