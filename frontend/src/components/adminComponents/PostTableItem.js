import { useState } from 'react'


import icons from '../../utils/icon/reactIcon'
import { useNavigate } from 'react-router-dom'


const PostTableItem = ({ currentItems }) => {

    const navigate = useNavigate()


    const { BiPencil, HiOutlineTrash, AiOutlineSearch, FiMoreHorizontal, BiCommentDetail } = icons
    const [showOptionMore, setShowOptionMore] = useState(false)

    return (
        <>

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
                                    <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:outline-none focus:border-blue-500" placeholder="Search Post" required />
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
                            <p className="text-sm font-medium leading-none text-white">Add Post</p>
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
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2">Title</p>
                                        </div>
                                    </td>
                                    <td className="pl-4"><p className="text-base font-medium leading-none text-gray-700 mr-2">Author</p></td>
                                    <td className="pl-4"><p className="text-base font-medium leading-none text-gray-700 mr-2 min-w-[100px]">Category</p></td>
                                    <td className="pl-4"><p className="text-base font-medium leading-none text-gray-700 mr-2 min-w-[100px]">Tags</p></td>
                                    <td className="pl-4"><p className="text-base font-medium leading-none text-gray-700 mr-2">Comment</p></td>
                                    <td className="pl-4"><p className="text-base font-medium leading-none text-gray-700 mr-2">Date</p></td>
                                    <td className="pl-4"><p className="text-base font-medium leading-none text-gray-700 mr-2">Task</p></td>
                                    <td className="pl-4"><p className="text-base font-medium leading-none text-gray-700 mr-2">Status</p></td>
                                    {/* <td className="pl-4">
                                        <div className="relative px-5 pt-2">
                                            <FiMoreHorizontal onClick={() => { setShowOptionMore(!showOptionMore) }} />
                                            {
                                                showOptionMore ? <> </> : <></>
                                            }

                                        </div>
                                    </td> */}
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                                <tr tabindex="0" className="focus:outline-none h-16 border border-gray-100 rounded">
                                    <td>
                                        <div className="ml-2">
                                            <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                <input placeholder="checkbox" type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                    <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                                        <path d="M5 12l5 5l10 -10"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="flex items-center pl-2">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2">Su dung thuoc khang sinh trong thai ki</p>
                                        </div>
                                    </td>
                                    <td className="pl-4">
                                        <div className="flex items-center">
                                            <p className="text-sm leading-none text-gray-600 ml-2">Chanh Ly</p>
                                        </div>
                                    </td>
                                    <td className="pl-4">
                                        <div className="flex flex-col items-left">
                                            <p className="text-sm leading-none text-gray-600 ml-2">san phu khoa</p>
                                            <p className="text-sm leading-none text-gray-600 ml-2">kien thuc y khoa</p>
                                            <p className="text-sm leading-none text-gray-600 ml-2">hiem muon</p>
                                        </div>
                                    </td>
                                    <td className="pl-4">
                                        <div className="flex items-center">
                                            <p className="text-sm leading-none text-gray-600 ml-2">thai ki, me be, san khoa</p>
                                        </div>
                                    </td>
                                    <td className="pl-4">
                                        <div className="flex items-center">
                                            <BiCommentDetail />
                                            <p className="text-sm leading-none text-gray-600 ml-2">12</p>
                                        </div>
                                    </td>
                                    <td className="pl-4">
                                        <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">21/02/2021</button>
                                    </td>
                                    <td className="pl-4">
                                        <div className="flex gap-4">
                                            <HiOutlineTrash size={24} onClick={() => { navigate(`/admin/deletePost/id`) }} />
                                            <BiPencil size={24} onClick={() => { navigate(`/admin/editPost/id`) }} />
                                        </div>
                                    </td>
                                    <td className="pl-4">
                                    <p className="text-sm leading-none text-gray-600 ml-2">Draft</p>
                                    </td>
                                </tr>
                                <tr className="h-3"></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PostTableItem

/*
import icons from '../../utils/icon/reactIcon'

const PostTableItem = ({ currentItems }) => {

    const { LuView, BiCommentDetail, BiLike } = icons

    return (
        <>
            <div className="flex flex-row flex-wrap mx-auto">
                {currentItems &&
                    currentItems.map((item, index) => (
                        <div key={index} className="transition-all duration-150 flex px-4 py-6  w-full md:w-1/2 lg:w-1/3" >
                            <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl" >
                                <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
                                    <span className="text-xs font-medium text-blue-600 uppercase">{item.main_category}</span>
                                    <div className="flex flex-row items-center">
                                        <div className="text-xs font-medium text-gray-500 flex flex-row items-center mr-2" >
                                            <LuView className="w-4 h-4 mr-1" /><span>{item.views_count}</span>
                                        </div>

                                        <div className="text-xs font-medium text-gray-500 flex flex-row items-center mr-2" >
                                            <BiCommentDetail className="w-4 h-4 mr-1" /> <span>{item.comment_count}</span>
                                        </div>

                                        <div className="text-xs font-medium text-gray-500 flex flex-row items-center" >
                                            <BiLike className="w-4 h-4 mr-1" /> <span>{item.like_count}</span>
                                        </div>
                                    </div>
                                </div>
                                <hr className="border-gray-300" />
                                <div className="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
                                    <a href="#" className="hover:underline">
                                        <h2 className="text-2xl font-bold tracking-normal text-gray-800">
                                            {item.title}
                                        </h2>
                                    </a>
                                </div>
                                <hr className="border-gray-300" />
                                <p className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700" >{item.abstract} </p>
                                <hr className="border-gray-300" />
                                <section className="px-4 py-2 mt-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center flex-1">
                                            <img className="object-cover h-10 rounded-full" src={item.author_avatar} alt="Avatar" />
                                            <div className="flex flex-col mx-2">
                                                <a href="" className="font-semibold text-gray-700 hover:underline"> {item.author} </a>
                                                <span className="mx-1 text-xs text-gray-600">{item.createSignUp}</span>
                                            </div>
                                        </div>
                                        <p className="mt-1 text-xs text-gray-600">{item.createAt}</p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default PostTableItem
*/