import React from 'react'
import TableRow from './TableRow';

const tableHeadContent = ["ID", "Title", "Discription", "Price", "Category", "Sold", "Image"];

const TransactionTable = ({ transactions }) => {
  return (
    <div className='bg-amber-200/80 rounded-xl w-full divide-y divide-amber-400 px-4'>
        <div className='flex justify-around items-center border-t-1 h-[3rem] font-semibold'>
            <div className='w-[3rem]'>
                ID
            </div>
            <div className='w-[13rem]'>
                Title
            </div>
            <div className='w-[15rem]'>
                Discription
            </div>
            <div className='w-[6rem] text-center '> 
                Price
            </div>
            <div className='w-[10rem]'>
                Category
            </div>
            <div className='w-[5rem]'>
                Sold
            </div>
            <div className='w-[5rem] flex justify-center'>
                Image
            </div>
        </div>
        {transactions.map(transaction => <TableRow key={transaction.id} {...transaction}/>)}
    </div>
  )
}

export default TransactionTable