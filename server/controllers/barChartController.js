import transactionModel from "../models/transactionModel.js";

export const getBarChartController = async (req, res) => {
    try {
        const { targetMonth } = req.body;
        const priceRange = [
            {
                range: "0 - 100",
                count: 0,
            },
            {
                range: "101 - 200",
                count: 0,
            },
            {
                range: "201 - 300",
                count: 0,
            },
            {
                range: "301 - 400",
                count: 0,
            },
            {
                range: "401 - 500",
                count: 0,
            },
            {
                range: "501 - 600",
                count: 0,
            },
            {
                range: "601 - 700",
                count: 0,
            },
            {
                range: "701 - 800",
                count: 0,
            },
            {
                range: "801 - 900",
                count: 0,
            },
            {
                range: "901 - above",
                count: 0,
            },
        
        ];

        let args = {}; // Search Arguments
        if(targetMonth){
            args.$expr =  {
                $eq: [{ $month: { $toDate: "$dateOfSale" } }, targetMonth]
            }
        }
        const transactions = await transactionModel.find(args);

        transactions?.forEach((transaction) => {
            let idx = Math.floor(transaction?.price/100);
            if(idx !== 0 && idx == transaction?.price/100){
                idx--;
            }

            if(idx > 9) idx = 9;

            priceRange[idx].count++; 
        });

        res.status(200).send(priceRange);
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in getting Bar Chart",
            error,
        });
    }
} 