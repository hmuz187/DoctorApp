import React from 'react'

import icons from '../../utils/icon/reactIcon'


const ShowGallery = () => {

    const { AiOutlineSearch } = icons

    return (
        <div className='flex flex-col'>
            {/* Search bar */}
            <div className="px-4 md:px-10 py-4 md:py-7">
                <div className="flex items-center justify-between">

                    <div className='flex flex-col min-w-[400px]'>
                        <form>
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <AiOutlineSearch />
                                </div>
                                <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:outline-none focus:border-blue-500" placeholder="Search image" required />
                                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>
                    </div>

                    <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                        <p>Sort By:</p>
                        <select aria-label="select" className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1">
                            <option className="text-sm text-indigo-800">Latest</option>
                            <option className="text-sm text-indigo-800">Oldest</option>
                        </select>
                    </div>

                </div>
            </div>

            <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                {/* Quick Filter */}
                <div className="sm:flex items-center justify-between">
                    <div className="flex items-center">
                        <a className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800" href="/">
                            <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                                <p>All</p>
                            </div>
                        </a>
                        <a className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8" href="/">
                            <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                                <p>Published</p>
                            </div>
                        </a>
                        <a className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8" href="/">
                            <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                                <p>Draft</p>
                            </div>
                        </a>
                    </div>
                    <button onclick="popuphandler(true)" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                        <p className="text-sm font-medium leading-none text-white">Add Image</p>
                    </button>
                </div>
            </div>

            <div className="mt-8 mx-4">
                <div className="p-4 bg-blue-50 dark:bg-gray-800 dark:text-gray-50 border border-blue-500 dark:border-gray-500 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold">#category-san-phu-khoa</h4>
                    <div className="grid grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[...Array(5)].map((x, i) => {
                            return (
                                <div key={i}>
                                    <img className="h-auto max-w-full rounded-lg" src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${(i % 10) + 2}.jpg`} alt="" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="mt-8 mx-4">
                <div className="p-4 bg-blue-50 dark:bg-gray-800 dark:text-gray-50 border border-blue-500 dark:border-gray-500 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold">#category-hiem-muon:</h4>
                    <div className="grid grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[...Array(5)].map((x, i) => {
                            return (
                                <div key={i}>
                                    <img className="h-auto max-w-full rounded-lg" src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${(i % 10) + 2}.jpg`} alt="" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ShowGallery