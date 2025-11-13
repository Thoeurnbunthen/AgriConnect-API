import express from "express";
import { swaggerDocs } from "./config/swagger";
import dotenv from "dotenv";
import connectDB from "./config/database";
dotenv.config();



const app = express();
const port = 4000;
const mongoUri = process.env.MONGODB_URI as string;




//connectDB();
connectDB();




//Enable json parsing body
app.use(express.json());

swaggerDocs(app, port);
//Enable urlencoded body
app.use(express.urlencoded({ extended: true }));

app.listen(4000, () => {
  console.log(`server run on port 4000`);
});
