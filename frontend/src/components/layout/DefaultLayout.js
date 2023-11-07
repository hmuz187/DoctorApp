import React from 'react'
import { InfoFooter, InfoHeader } from '../infoComponents'

const DefaultLayout = ({children}) => {
  return (
    <div>
        <InfoHeader/>
        <div className=''>
            {children}
        </div>
        <InfoFooter/>
    </div>
  )
}

export default DefaultLayout