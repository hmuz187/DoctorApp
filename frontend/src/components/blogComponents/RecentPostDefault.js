

const RecentPostDefault = ({ currentItems }) => {
    return (
        <div className='mt-10'>
            <h2 class="flex flex-row flex-nowrap items-center my-8">
                <span class="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                <span class="flex-none block mx-4 px-4 py-2.5 text-md leading-none font-medium uppercase bg-[#1F1B4A] rounded-lg text-white">
                    Bài viết mới nhất
                </span>
                <span class="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
            </h2>
            <div className='grid grid-cols-3 gap-4 p-4'>
                {currentItems.map((item, index) => {
                    return (
                        <div key={item} className='flex flex-col justify-center items-center border border-solid shadow rounded-md p-4'>
                            <img className='h-[120px] w-full mb-4 bg-[#1F1B4A] rounded-xl' src={item.src} alt="" />
                            <div className=''>
                                <h3 className='block font-semibold animate-pulse'>{item.title}</h3>
                                <p>
                                    {item.content}
                                </p>
                                <p className='block w-full text-gray-400 justify-end items-end'>{item.createdAt}</p>

                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default RecentPostDefault