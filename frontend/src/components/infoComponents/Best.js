import React from 'react'
import {imgtitle, icon_1, icon_2} from '../../assets/images/index'

import BestComponet from './BestComponent'

const list_box = [
  {
    href: icon_1,
    title: "Interest in health and professional care",
    tbody: "We work to care about health care",
    tbody2: "The child has full attention in all aspects",
  },
  {
    href: icon_2,
    title: "Interest in health and professional care",
    tbody: "We work to care about health care",
    tbody2: "The child has full attention in all aspects",
  },
  {
    href: icon_1,
    title: "Interest in health and professional care",
    tbody: "We work to care about health care",
    tbody2: "The child has full attention in all aspects",
  },
]
const Best = () => {
  return (
    <div className='bg-[#F6FDFF] pt-20 '>
      <div className='flex justify-center items-center flex-col space-y-4'>
        <h4 className='text-[#333333] leading-6 text-[22px] font-medium'>Because we are always the best</h4>
        <h2 className='text-[#02c873] leading-8 text-[28px] font-bold'>What distinguishes us to be the best choice</h2>
        <img className=' pb-8' src={imgtitle} alt="imagetilte" />
      </div>
      <div className=' flex lg:flex-row lg:mx-40 flex-col gap-10 mb-14 justify-center items-center'>
        {/* boxs  */}
        {
          list_box.map((ele, index) => {
            return <BestComponet key={index} href={ele.href} title={ele.title} tbody={ele.tbody} tbody2={ele.tbody2} />
          })
        }
      </div>
    </div>
  )
}
export default Best