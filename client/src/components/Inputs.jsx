import React from 'react'

const options = [
    { month: "All Months", value: 0},
    { month: "January", value: 1},
    { month: "February", value: 2},
    { month: "March", value: 3},
    { month: "April", value: 4},
    { month: "May", value: 5},
    { month: "June", value: 6},
    { month: "July", value: 7},
    { month: "August", value: 8},
    { month: "September", value: 9},
    { month: "October", value: 10},
    { month: "November", value: 11},
    { month: "December", value: 12},
]

const Inputs = ({keyword, targetMonth, handleChange}) => {


    return (
        <div className='flex justify-between'>
            <input 
                type="text" 
                name="keyword"
                className='bg-amber-300/80 lg:w-[15rem] w-[10rem] h-10 px-4 rounded-xl font-semibold text-md'
                placeholder='Search transaction'
                value={keyword}
                onChange={handleChange}
            />
            <select 
                name="targetMonth"
                className='bg-amber-300/80 lg:w-[12rem] w-[8rem] h-10 text-center rounded-md font-semibold text-md'
                value={targetMonth}
                onChange={handleChange}
            >
                {options?.map(({month,value}) => {
                    return <option key={value} value={value}>{month}</option>
                })}
            </select>
        </div>
    )
}

export default Inputs