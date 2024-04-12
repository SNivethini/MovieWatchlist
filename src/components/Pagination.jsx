import React from 'react'

function Pagination({changeNext,changePrev,Pagno}) {
  return (
    <div className='bg-gray-400 flex justify-center p-4 mt-8 '>
        <div onClick={changePrev} className='font-bold px-8'><i class="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold'>{Pagno}</div>
        <div onClick={changeNext} className='font-bold px-8'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination