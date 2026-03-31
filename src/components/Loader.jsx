import React from 'react'

const Loader = () => {
  return (
    <div className=' h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-800'>
        <div className=' h-20 w-20 rounded-[50%] border-8 border-gray-300 border-t-gray-400 dark:border-gray-500 dark:border-t-gray-600 animate-spin'></div>
    </div>
  )
}

export default Loader