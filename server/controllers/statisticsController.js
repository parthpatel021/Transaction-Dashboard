import transactionModel from "../models/transactionModel.js";

export const getStatisticsController = async (req, res) => {
    try {
        const { targetMonth } = req.body;
        let args = {};

        if (targetMonth) {
            args= {
                $expr: { $eq: [{ $month: { $toDate: "$dateOfSale" } }, targetMonth] }
            }
        }

        const result = await transactionModel.aggregate([
            {
                $match: args
            },
            {   // Sold
                $group: {
                    _id: "$sold",
                    totalSaleAmount: { $sum: { $cond: [{ $eq: ["$sold", true] }, "$price", 0] } },
                    totalItems: { $sum: 1 }
                }
            },
            {   // Unsold
                $project: {
                    _id: 0,
                    sold: "$_id",
                    totalSaleAmount: 1,
                    totalItems: 1
                }
            }
        ]);

        const saleSummary = {
            totalSaleAmount: 0,
            totalSoldItems: 0,
            totalNotSoldItems: 0
        };

        result.forEach(summary => {
            if (summary.sold === true) {
                saleSummary.totalSaleAmount = summary.totalSaleAmount;
                saleSummary.totalSoldItems = summary.totalItems;
            } else {
                saleSummary.totalNotSoldItems = summary.totalItems;
            }
        });

        res.status(200).send({
            ...saleSummary,
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in getting Statistics",
            error,
        });
    }
}