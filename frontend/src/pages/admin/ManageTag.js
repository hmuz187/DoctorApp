import React from 'react'
import { AdminTagTablePagination } from '../../components/adminComponents'
import { ListTag } from './DataExamples'

const ManageTag = () => {
  return (
    <div>
      <AdminTagTablePagination items={ListTag} itemsPerPage={4}/>
    </div>
  )
}

export default ManageTag