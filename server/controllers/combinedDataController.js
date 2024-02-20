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
        const [statisticsResponse, barChartResponse, pieChartResponse] = await Promise.all([
            axios.get('http://localhost:8080/statistics', { data: { ...reqData } }),
            axios.get('http://localhost:8080/bar-chart', { data: { ...reqData } }),
            axios.get('http://localhost:8080/pie-chart', { data: { ...reqData } })
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