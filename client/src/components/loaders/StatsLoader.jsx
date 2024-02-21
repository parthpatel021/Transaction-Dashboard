import React from 'react'
import { PulseLoader } from 'react-spinners'

const StatsLoader = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <PulseLoader color="rgba(180 ,83 ,9, 0.5)" />
    </div>
  )
}

export default StatsLoader