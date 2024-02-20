import axios from "axios";

export const getCombinedDataController = async (req,res) => {
    try {
        const { targetMonth } = req.body;
        const reqData = {};
        if (targetMonth) {
            // validation check
            if(targetMonth < 1 || targetMonth > 12){
                res.status(400).send({
                    success: false,
                    message: "Invalid Target Month"
                });
            }
            reqData.targetMonth = targetMonth;
        }

        // Fetch data from all three APIs using axios
        const serverURL = process.env.SERVER_URL;
        const [statisticsResponse, barChartResponse, pieChartResponse] = await Promise.all([
            axios.get(`${serverURL}/statistics`, { data: { ...reqData } }),
            axios.get(`${serverURL}/bar-chart`, { data: { ...reqData } }),
            axios.get(`${serverURL}/pie-chart`, { data: { ...reqData } })
        ]);

        // Combine responses
        const combinedData = {
            statistics: statisticsResponse.data,
            barChart: barChartResponse.data,
            pieChart: pieChartResponse.data
        };

        res.status(200).send(combinedData);

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in getting Combined Data",
            error,
        });
    }
}