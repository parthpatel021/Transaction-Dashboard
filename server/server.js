import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import apiRoutes from "./apiRoutes.js";

// configure env
dotenv.config();

// databse config
connectDB();

const app = express();

//routes
app.use("", apiRoutes);

// PORT
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
})