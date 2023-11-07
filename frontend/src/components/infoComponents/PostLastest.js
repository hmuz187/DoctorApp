import React from 'react'

const PostLastest = ({ currentItems }) => {
    return (
        <div className='mt-8 w-full'>
            <div className="bg-white shadow rounded-lg p-4 ">
                <h2 class="flex flex-row flex-nowrap items-center my-8">
                    <span class="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                    <span class="flex-none block mx-4 px-4 py-2.5 text-md leading-none font-medium uppercase bg-[#1F1B4A] rounded-lg text-white">
                        Được xem nhiều nhất
                    </span>
                    <span class="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                </h2>
                <div className="flex flex-col mt-8">
                    <div className="overflow-x-auto rounded-lg">
                        <div className="align-middle inline-block min-w-full">
                            <div className="shadow overflow-hidden sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Title
                                            </th>
                                            <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Created At
                                            </th>
                                            <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Views
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {currentItems.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="p-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                                                        {item.title}
                                                    </td>
                                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                        {item.createdAt}
                                                    </td>
                                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                        {item.view}
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostLastest