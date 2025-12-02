import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import cors from "cors";



// import Route

import userRoute from "../src/api/routes/userRoute.js";
import { errorMiddleware } from "./api/middleware/errorMiddleware.js";


const app = express();



// use Middleware


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("tiny"));
app.use(cors());
app.use(errorMiddleware);


// user Routes
app.use("/api",userRoute);


export default app;
