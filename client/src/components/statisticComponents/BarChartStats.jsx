import React, { useEffect, useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import axios from 'axios';

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export default function BarChartStats({ targetMonth }) {
    const [stats, setStats] = useState([]);
    const [names, setNames] = useState([]);
    const [values, setValues] = useState([]);

    useEffect(() => {
        const getBarChartStats = async () => {
            const queryParamters = {};
            if (targetMonth !== 0) {
                queryParamters.targetMonth = targetMonth;
            }

            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/bar-chart/`,
                {
                    params: { ...queryParamters }
                }
            );

            const updatedStats = res.data;
            setStats(updatedStats);

            setNames(() => updatedStats.map((s) => {
                return s.range
            }));
            setValues(() => updatedStats.map((s) => {
                return s.count
            }));

        }

        getBarChartStats();
    }, [targetMonth])
    return (
        <div className='pl-3'>
            <h4 className='font-bold text-2xl px-5'>
                Bar Chart Stats {targetMonth !== 0 ? `- ${month[targetMonth - 1]}` : null}
            </h4>
            {names.length > 0 && <BarChart
                xAxis={[
                    {
                        id: 'barCategories',
                        data: names,
                        scaleType: 'band',
                    },
                ]}
                series={[
                    {
                        data: values,
                    },
                ]}
                width={900}
                height={300}
            />
            }
        </div>
    );
}
