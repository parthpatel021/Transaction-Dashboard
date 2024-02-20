import transactionModel from "../models/transactionModel.js";

export const getPieChartController = async (req, res) => {
    try {
        const { targetMonth } = req.query;
        let args = {};

        if (targetMonth) {
            const parsedTargetMonth = parseInt(targetMonth);
            // validation check
            // validation check
            if(isNaN(parsedTargetMonth) || parsedTargetMonth < 1 || parsedTargetMonth > 12){
                return res.status(400).send({
                    success: false,
                    message: "Invalid Target Month"
                });
            }
            args= {
                $expr: { $eq: [{ $month: { $toDate: "$dateOfSale" } }, parsedTargetMonth] }
            }
        }
        const result = await transactionModel.aggregate([
            {
                $match: args
            },
            {
                $group: {
                    _id: "$category",
                    count: { $sum: 1 }
                }
            }
        ]);

        const categoryCounts = result.map(item => ({
            category: item._id,
            count: item.count
        }));

        res.status(200).send(categoryCounts);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in getting Pie Chart",
            error,
        });
    }
}