

import React from 'react'
import DashBoardPagination from '../../components/adminComponents/DashboardPagination'


import { ListPostExamples } from './DataExamples'



const ListAllPost = () => {
  return (
    <div>
      <DashBoardPagination  itemsPerPage={4} items={ListPostExamples}/>
    </div>
  )
}

export default ListAllPost