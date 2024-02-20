import express from "express";
import { dbInitController } from "./controllers/dbInitController.js";
import { getTransactionController } from "./controllers/transactionController.js";

// router object
const router = express.Router();

// GET DB Init
router.get("/initialize-database", dbInitController);

// GET transactions
router.get("/transactions/:page", getTransactionController)

export default router;