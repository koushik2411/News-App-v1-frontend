import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

const NewsCard = ({article}) => {
  return (
    <>
        <div className=' w-full p-3 rounded-lg bg-amber-200 flex flex-col gap-2 justify-evenly bg-linear-to-b from-gray-50 to-gray-200 dark:bg-linear-to-b dark:from-gray-900 dark:to-gray-800 dark:text-gray-100'>
            <img
                src={article.image && article.image !== "None" ? article.image  : "https://via.placeholder.com/300"}
                alt='No image'
                className=' rounded-t-lg lg:h-56'
            />

            <h3 className=' text-xl font-semibold'>
                {article.title}
            </h3>

            <p className='description'>
                {article.description}
            </p>

            <p>
                {article.author && article.author !== "None" ? article.author : "Unknown"}
            </p>

            <a href={article.url && article.url !== "None" ? article.url : "#"} target='_blank' rel='noreferrer' className=' text-gray-100 self-end'>
                <button className=' py-1 px-3 rounded-lg bg-linear-to-b from-gray-500 to-gray-700 dark:bg-linear-to-b dark:from-gray-600 dark:to-gray-700 flex gap-2 items-center'>
                    Read More
                    <FaArrowCircleRight />
                </button>
            </a>

        </div>
    </>
  )
}

export default NewsCard