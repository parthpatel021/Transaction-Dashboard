import express from "express";
import { dbInitController } from "./controllers/dbInitController.js";
import { getTransactionController } from "./controllers/transactionController.js";
import { getStatisticsController } from "./controllers/statisticsController.js";

// router object
const router = express.Router();

// GET DB Init
router.get("/initialize-database", dbInitController);

// GET transactions
router.get("/transactions/:page", getTransactionController);

router.get("/statistics", getStatisticsController);

export default router;