import React from 'react'

const Map = () => {
  return (
    <div >
      <h2 class="flex flex-row flex-nowrap items-center mt-20 mb-2">
        <span class="flex-grow block border-t border-[#1F1B4A]" aria-hidden="true" role="presentation"></span>
        <span class="flex-none block mx-4 px-4 py-2.5 text-md leading-none font-medium uppercase bg-[#1F1B4A] rounded-lg text-white">
          Find us
        </span>
        <span class="flex-grow block border-t border-[#1F1B4A]" aria-hidden="true" role="presentation"></span>
      </h2>
      <div className='h-[200px]'>
        <iframe src="https://maps.google.iq/?q=10.336353, 103.856864&amp;z=17&amp;output=embed" width="100%" height="100%" title="Example website" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
      </div>
    </div>
  )
}

export default Map