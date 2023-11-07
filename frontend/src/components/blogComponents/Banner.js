import React from 'react'
import { banner01, banner02 } from '../../assets/images/index'

const Banner = () => {
  return (
    <div>
      <div className='w-screen relative'>
        <img className='w-full h-[300px] object-cover object-left-top mb-4' src={banner01} alt="" />
        <div class="absolute bottom-0 px-4 py-3 w-full items-end justify-end flex flex-col pr-20">
          <h1 class="text-white font-semibold text-4xl"> Take care of your health </h1>
          <p class="text-gray-200">
            To protect your family and make your life better
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner