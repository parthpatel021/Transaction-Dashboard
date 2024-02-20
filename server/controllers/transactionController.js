import transactionModel from "../models/transactionModel.js";

export const getTransactionController = async (req, res) => {
    try {
        const { targetMonth, keyword } = req.query;
        const page = req.params.page ? req.params.page : 1;
        const perPage = 10;

        let args = {}; // Search Arguments
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
        if(keyword){
            args.$or= [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
                // { price: { $regex: keyword, $options: "i" } },
            ]
        }

        const transactions = await transactionModel
            .find(args)
            .skip((page-1)*perPage)
            .limit(perPage);


        res.status(200).send(transactions);

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in getting transactions",
            error,
        });
    }
}