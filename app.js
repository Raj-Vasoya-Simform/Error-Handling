import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/user.js";
import errorMiddleware from "./middlewares/error.js";
import { connectDB } from "./config/database.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use(userRouter);

connectDB();

app.listen(4000, () => {
  console.log("Server is working");
});

app.use(errorMiddleware);
