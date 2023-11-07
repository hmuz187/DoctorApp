import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = () => {
  return (
    <>
      <div className={"w-full lg:w-1/3 md:w-1/2 md:px-[15px] px-2 mb-[30px]"}>
        <Link
          to={'/'}
          className="border-b-[5px] border-blue-500 dark:bg-slate-800 dark:text-white dark:drop-shadow-lg flex flex-col justify-between"
        >
          <div>
            <div className={"rounded-t-[4px] overflow-hidden h-[200px] relative"}>
              <img src='https://nextjs-simple-blog-template.web.app/imp_assets/tutorials/home-layouts.svg?w=640&q=100%20640w' />
            </div>

            <div className={"d-block px-[15px] py-0"}>
              <p className={"font-normal text-xs pt-3 mb-0 md:mb-3"}>
                August 14 2022
              </p>
              <Link to={'/'}>
                <h1 className={"text-[22px] font-bold cursor-pointer tracking-wide hover:text-blue-600"} > Home Layout Example </h1>
              </Link>
              <p className="text-sm font-normal mt-2 md:mt-1"  > slice 0...100 In this article we will see Default Home Layout example. ... </p>
              {/* <PostTag tags={'home, hello, world, boss'} /> */}
            </div>
          </div>
          <div className="mt-4 mb-3 flex items-center px-3" >
            <div className={"flex items-center"}>
              {/* <Avatar
                author={article.author}
                className="w-[40px] h-[40px] mr-3 text-xl"
              /> */}
              <Link className="text-sm font-medium" >
                author name
              </Link>
              {/* <p className={combineClasses(classes.author_name, 'text-sm font-medium')}>
              {article.author.name}
            </p> */}
            </div>
            {/* <ArticleCardCategory category={article.category} /> */}
          </div>
        </Link>
      </div>
    </>
  )
}

export default PostCard