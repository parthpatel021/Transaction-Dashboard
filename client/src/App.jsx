import { useEffect, useState } from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import axios from "axios";
import TransactionTable from "./components/Table/TransactionTable";
import PageNavigation from "./components/Table/PageNavigation";
import Statistics from "./components/statisticComponents/Statistics";
import BarChartStats from "./components/statisticComponents/BarChartStats";

function App() {
    const [keyword, setKeyword] = useState("");
    const [targetMonth, setTargetMonth] = useState(0);
    const [page, setPage] = useState(1);
    const [transactions, setTransactions] = useState([]);

    const handleChange = (e) => {
        const {name,value} = e.target;
        if(name === "keyword"){
            setKeyword(value);
        } else {
            setTargetMonth(value);
        }
        setPage(1);
    }

    

    useEffect(() => {
        const updateTransactions = async () => {
            const queryParamters = {};
            if(targetMonth !== 0){
                queryParamters.targetMonth = targetMonth;
            }
            if(keyword !== ""){
                queryParamters.keyword = keyword;
            }

            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/transactions/${page}`, 
                { 
                    params: { ...queryParamters } 
                }
            );

            const updatedTransactions = res.data;
            
            // console.log(updatedTransactions);
            setTransactions([...updatedTransactions]);
        }
        updateTransactions();
    }, [keyword, targetMonth, page])

    return (
        <div className="App lg:mx-[15em] md:mx-[5rem]">
            <Header />
            <Inputs 
                keyword={keyword} 
                targetMonth={targetMonth} 
                handleChange={handleChange}
            />
            <div className="my-5">
                <TransactionTable transactions={transactions}/>
                <PageNavigation page={page} setPage={setPage}/>
            </div>
            <div className="flex my-10">
                <Statistics targetMonth={targetMonth} />
                <BarChartStats targetMonth={targetMonth} />
            </div>
        </div>
    );
}

export default App;
