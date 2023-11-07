import React from 'react'

const TagShow = ({ tagShow }) => {
    return (
        <div>
            <div>
                <div className='m-4 flex flex-wrap justify-center'>
                    {
                        tagShow.map((each, i) => {
                            return (
                                <a href={`/tags/${each.link}`}>
                                    <p key={i} className="hover:text-blue-500 text-[12px] font-normal mr-2 mb-1 inline-block text-gray-500 dark:text-gray-400" >
                                        {`#`}{each.name}
                                    </p>
                                </a>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TagShow