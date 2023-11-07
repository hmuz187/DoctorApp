import icons from '../../utils/icon/reactIcon'

const PostCardItem = ({ currentItems }) => {

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

export default PostCardItem