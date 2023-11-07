
import { categoryShow, postLatestShow, postViewShow, tagShow } from './DataExamples'
import { BlogBanner, BlogCategoryShowPagination, BlogRecentPostDefault, BlogTagShow } from '../../components/blogComponents'
import { InfoPostLastest } from "../../components/infoComponents/index"


const Blog = () => {
    return (
        <div className='flex flex-col pt-4'>
            {/* banner */}
            <div className='w-full flex'>
                <BlogBanner />
            </div>

            {/* Category */}
            <BlogCategoryShowPagination itemsPerPage={6} items={categoryShow} />


            {/* Recent post */}
            <BlogRecentPostDefault currentItems={postLatestShow} />

            {/* Recommend post */}
            <div className='flex'>
                <InfoPostLastest currentItems={postViewShow} />
            </div>

            {/* Tag */}
            <div>
                <BlogTagShow tagShow={tagShow} />
            </div>
        </div>
    )
}

export default Blog