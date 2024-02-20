import transactionModel from "../models/transactionModel.js";

export const getPieChartController = async (req, res) => {
    try {
        const { targetMonth } = req.body;
        let args = {};

        if (targetMonth) {
            // validation check
            if(targetMonth < 1 || targetMonth > 12){
                res.status(400).send({
                    success: false,
                    message: "Invalid Target Month"
                });
            }
            args= {
                $expr: { $eq: [{ $month: { $toDate: "$dateOfSale" } }, targetMonth] }
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