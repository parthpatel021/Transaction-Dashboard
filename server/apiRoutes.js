import express from "express";
import { dbInitController } from "./controllers/dbInitControllers.js";

// router object
const router = express.Router();

router.get("/initialize-database", dbInitController);

export default router;