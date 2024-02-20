import axios from 'axios';
import React, { useEffect, useState } from 'react'

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const Statistics = ({ targetMonth }) => {
    const [stats, setStats] = useState({});

    useEffect(() => {
        const getStatistics = async () => {
            const queryParamters = {};
            if (targetMonth !== 0) {
                queryParamters.targetMonth = targetMonth;
            }

            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/statistics/`,
                {
                    params: { ...queryParamters }
                }
            );

            const updatedStats = res.data;
            setStats(updatedStats);

            console.log(updatedStats);
        }

        getStatistics();
    }, [targetMonth])
    return (
        <div className=''>
            <h4 className='font-bold text-2xl px-5'>
                Statistics {targetMonth !== 0 ? `- ${month[targetMonth-1]}` : null}
            </h4>
            <div className='bg-amber-200/80 rounded-xl  divide-amber-400 p-4 my-5 w-[18rem]'>
                <div className='flex'>
                    <div className='w-[10rem]'>
                        Total Sale
                    </div>
                    <div className='w-[5rem]'>
                        {stats.totalSaleAmount}
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-[10rem]'>
                        Total sold items
                    </div>
                    <div className='w-[5rem]'>
                        {stats.totalSoldItems}
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-[10rem]'>
                        Total not sold items
                    </div>
                    <div className='w-[5rem]'>
                        {stats.totalNotSoldItems}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics