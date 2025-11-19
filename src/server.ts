import express from "express";
import { swaggerDocs } from "./config/swagger";
import dotenv from "dotenv";
import connectDB from "./config/database";
import Router from "./routes/index";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/v1", Router);

const port = 4000;

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
