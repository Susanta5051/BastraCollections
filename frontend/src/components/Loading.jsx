import React from 'react'

const Loading = () => {
  return (
    <div className='relative'>
      <div className='bg-gray-200 h-70 flex flex-col w-80 rounded'>
        <div className='rounded blink h-40 m-2 w-60 self-center '></div>
        <div className='rounded blink h-5 m-2 w-40'></div>
        <div className='rounded blink h-5 m-2 w-50'></div>
        <div className='rounded blink h-10 m-2 w-70'></div>
      </div>
    </div>
  )
}   

export default Loading
