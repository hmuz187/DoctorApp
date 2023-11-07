import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import icons from '../../utils/icon/reactIcon'


const TagTableList = ({ currentItems }) => {
    const navigate = useNavigate()
    const { BiPencil, HiOutlineTrash, AiOutlineSearch, BiCommentDetail, BiDownload, FiMoreHorizontal } = icons


    const [showOptionMore, setShowOptionMore] = useState(false)


    return (
        <div>
            <div className="sm:px-6 w-full">
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
                                    <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:outline-none focus:border-blue-500" placeholder="Search Tag" required />
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

                        <button onclick="popuphandler(true)" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                            <p className="text-sm font-medium leading-none text-white">Add Tag</p>
                        </button>
                    </div>

                    {/* Post Table List */}
                    <div className="mt-7 overflow-x-auto">
                        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">

                            <thead className="bg-gray-50">
                                <tr tabindex="0" className="focus:outline-none h-16 border border-gray-100 rounded">
                                    <td>
                                        <div className="ml-2">
                                            <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                <input placeholder="checkbox" checked="" type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="flex items-center pl-5 min-w-[250px]">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2">Tags</p>
                                        </div>
                                    </td>
                                    <td className="pl-4"><p className="text-base font-medium leading-none text-gray-700 mr-2">Author</p></td>
                                    <td className="pl-4"><p className="text-base font-medium leading-none text-gray-700 mr-2">Total Post</p></td>
                                    <td className="pl-4"><p className="text-base font-medium leading-none text-gray-700 mr-2">Date</p></td>
                                    <td className="pl-4"><p className="text-base font-medium leading-none text-gray-700 mr-2">Task</p></td>
                                    <td className="pl-4"><p className="text-base font-medium leading-none text-gray-700 mr-2">Export</p></td>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                                {
                                    currentItems
                                    && currentItems.map((item, index) => {
                                        return (
                                            <>
                                                <tr tabindex="0" className="focus:outline-none h-16 border border-gray-100 rounded">
                                                    <td>
                                                        <div className="ml-2">
                                                            <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                                <input placeholder="checkbox" type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="">
                                                        <div className="flex items-center pl-2">
                                                            <p className="text-base font-medium leading-none text-gray-700 mr-2">{item.name}</p>
                                                        </div>
                                                    </td>
                                                    <td className="pl-4">
                                                        <div className="flex items-center">
                                                            <p className="text-sm leading-none text-gray-600 ml-2">{item.author}</p>
                                                        </div>
                                                    </td>
                                                    <td className="pl-4">
                                                        <div className="flex items-center">
                                                            <BiCommentDetail />
                                                            <p className="text-sm leading-none text-gray-600 ml-2">{item.totalPost}</p>
                                                        </div>
                                                    </td>
                                                    <td className="pl-4">
                                                        <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">{new Date(item.createdAt).toDateString()}</button>
                                                    </td>
                                                    <td className="pl-4">
                                                        <div className="flex gap-4">
                                                            <HiOutlineTrash size={24} onClick={() => { navigate(`/admin/deletePost/id`) }} />
                                                            <BiPencil size={24} onClick={() => { navigate(`/admin/editPost/id`) }} />
                                                        </div>
                                                    </td>
                                                    <td className="pl-4">
                                                        <BiDownload size={24} />
                                                    </td>
                                                </tr>
                                                <tr className="h-3"></tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TagTableList