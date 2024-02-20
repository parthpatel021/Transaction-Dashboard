import React from 'react'

const TableRow = ({ id, title, description, price, category, sold, image }) => {
    return (
        <div className='flex justify-around items-center border-t-1 hover:bg-amber-200 transition duration-500'>
            <div className='w-[3rem]'>
                {id}
            </div>
            <div className='w-[13rem]'>
                {title.length > 50 ? (title.substring(0, 45)+'...') : title}
            </div>
            <div className='w-[15rem] text-sm '>
                {description.length > 60 ? (description.substring(0, 60)+'...') : description}
            </div>
            <div className='w-[6rem] text-center '> 
                {price}
            </div>
            <div className='w-[10rem]'>
                {category}
            </div>
            <div className='w-[5rem]'>
                {sold ? 
                    <p className='text-green-700 font-bold'>Sold</p> : 
                    <p className='text-red-700 font-bold'>Unsold</p>
                }
            </div>
            <div className='w-[5rem] flex justify-center'>
                <img src={image} alt="transaction" className='h-[5rem] py-1 mix-blend-multiply' />
            </div>
        </div>
    )
}

export default TableRow