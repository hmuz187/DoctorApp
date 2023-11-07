import React from 'react'

import {AdminCategoryTablePagination} from '../../components/adminComponents/index'
import { ListCategory } from './DataExamples'

const PostCategory = () => {
  return (
    <div>
      <AdminCategoryTablePagination items={ListCategory} itemsPerPage={4}/>
    </div>
  )
}

export default PostCategory