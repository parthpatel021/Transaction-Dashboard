import transactionModel from "../models/transactionModel.js";

export const getStatisticsController = async (req, res) => {
    try {
        const { targetMonth } = req.query;
        let args = {};

        if(targetMonth){
            const parsedTargetMonth = parseInt(targetMonth);
            // validation check
            if(isNaN(parsedTargetMonth) || parsedTargetMonth < 1 || parsedTargetMonth > 12){
                return res.status(400).send({
                    success: false,
                    message: "Invalid Target Month"
                });
            }
            args.$expr =  {
                $eq: [{ $month: { $toDate: "$dateOfSale" } }, parsedTargetMonth]
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

