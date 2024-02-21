import React from 'react'
import {BounceLoader} from 'react-spinners';

const TableLoader = () => {
  return (
    <div className='bg-amber-200/80 rounded-xl w-full px-4 '>
        <div className='flex flex-col justify-center items-center min-h-[8rem]'>
            <BounceLoader color="rgba(180 ,83 ,9, 0.5)" />
            <p className='font-semibold text-xl'>Loading ...</p>
        </div>
    </div>
  )
}

export default TableLoader