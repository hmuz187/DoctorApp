import React from 'react'
import { Link } from 'react-router-dom'

const CategoryShowDefault = ({currentItems}) => {
    const categoryShow = currentItems
    return (
        <div>
            <div>
                <div className='flex flex-row justify-start items-center mb-4'>
                    <h3 className='font-black text-gray-800 md:text-3xl text-xl pr-10 pl-5'>Category</h3>
                    <div className='text-blue-500 hover:font-semibold'>
                        <a href="/">{'>>'}See All</a>
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-4 m-4'>
                    {categoryShow.map((category, index) => {
                        return (
                            <div className='flex flex-col justify-center rounded-lg border border-solid shadow items-center'>
                                <Link className='flex flex-col items-center' to={category.link}>
                                    <img className='' src={category.image} alt="" />
                                    <span className='font-bold text-xs p-2 text-blue-800'>{category.category.toUpperCase()}</span>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CategoryShowDefault