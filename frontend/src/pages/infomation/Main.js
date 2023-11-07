

import {postLatestShow, postViewShow} from './DataExamples'

import { InfoMap, InfoHero, InfoPostRecommend, InfoPostLastest} from "../../components/infoComponents/index"
import { BlogBanner, BlogCategoryShowPagination, BlogRecentPostDefault } from '../../components/blogComponents'


const Main = () => {
  return (
    <>
        <InfoHero />
        <BlogRecentPostDefault currentItems={postLatestShow} />
        <InfoPostLastest currentItems={postViewShow}/>
        <InfoMap />
    </>
  )
}

export default Main

