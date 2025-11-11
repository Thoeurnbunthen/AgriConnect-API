import express from "express";
import { swaggerDocs } from "./config/swagger";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 4000;
const mongoUri = process.env.MONGODB_URI as string;

mongoose
  .connect(mongoUri)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

//Enable json parsing body
app.use(express.json());

swaggerDocs(app, port);
//Enable urlencoded body
app.use(express.urlencoded({ extended: true }));

app.listen(4000, () => {
  console.log(`server run on port 4000`);
});
