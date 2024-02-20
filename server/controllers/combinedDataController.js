import axios from "axios";

export const getCombinedDataController = async (req,res) => {
    try {
        const { targetMonth } = req.query;
        const reqData = {};
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
            reqData.targetMonth = parsedTargetMonth;
        }

        // Fetch data from all three APIs using axios
        const serverURL = process.env.SERVER_URL;
        const [statisticsResponse, barChartResponse, pieChartResponse] = await Promise.all([
            axios.get(`${serverURL}/statistics`, { params: { ...reqData } }),
            axios.get(`${serverURL}/bar-chart`, { params: { ...reqData } }),
            axios.get(`${serverURL}/pie-chart`, { params: { ...reqData } })
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