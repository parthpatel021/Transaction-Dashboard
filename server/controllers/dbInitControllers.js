import axios from "axios";
import transactionModel from "../models/transactionModel.js";

const addToDatabase = async (transaction) => {
    try {
        const existingTransaction = await transactionModel.findOne({ id: transaction.id });

        if(!existingTransaction){
            await new transactionModel({...transaction}).save();
        }
    } catch (error) {
        return error;
    }
}

export const dbInitController = async (req, res) => {
    try {
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const seedData = response?.data;

        
        for(let i = 0; i < seedData.length; i++){
            addToDatabase(seedData[i]);
        }

        res.status(200).send({
            success: true,
            message: 'Database initalized successfully with seed Data',
            seedData,
        });
        
    } catch (error) { 
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Database Initalization",
            error,
        });
    }
}