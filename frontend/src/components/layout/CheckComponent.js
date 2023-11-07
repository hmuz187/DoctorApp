import React from 'react'
import {} from '../adminComponents/index'
import {InfoDefaultCarousel, InfoDefaultSmallCarousel, InfoPostRecommend} from '../infoComponents/index'
import { BlogPostCard} from '../blogComponents'

const CheckComponent = ({children}) => {
  return (
    <div>
        <InfoDefaultSmallCarousel />
        <InfoPostRecommend />
        <InfoDefaultCarousel />
        {children}
        <BlogPostCard/>
    </div>
  )
}

export default CheckComponent