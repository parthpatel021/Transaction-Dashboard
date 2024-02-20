import express from "express";
import { dbInitController } from "./controllers/dbInitController.js";
import { getTransactionController } from "./controllers/transactionController.js";
import { getStatisticsController } from "./controllers/statisticsController.js";
import { getBarChartController } from "./controllers/barChartController.js";
import { getPieChartController } from "./controllers/pieChartController.js";
import { getCombinedDataController } from "./controllers/combinedDataController.js";

// router object
const router = express.Router();

// GET DB Init
router.get("/initialize-database", dbInitController);

// GET transactions
router.get("/transactions/:page", getTransactionController);

// GET statistics
router.get("/statistics", getStatisticsController);

// GET bar-chart
router.get("/bar-chart", getBarChartController);

// GET pie-chart
router.get("/pie-chart", getPieChartController);

// GET pie-chart
router.get("/combined-data", getCombinedDataController);

export default router;