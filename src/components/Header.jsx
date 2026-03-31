import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
        <header className=' p-3 pr-5 flex justify-between items-center bg-linear-to-b from-gray-50 to-gray-200 dark:bg-linear-to-b dark:from-gray-900 dark:to-gray-800'>
            <div>
                <h1 className=' text-2xl font-bold text-gray-800 dark:text-gray-100'>
                    News App
                </h1>
            </div>
            <Navbar/>
        </header>
    </>
  )
}

export default Header