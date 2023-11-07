
import ManagePostPagination from '../../components/adminComponents/ManagePostPagination'
import { ListPostExamples } from './DataExamples'


const ManagePost = () => {
  return (
    <div>
      <ManagePostPagination itemsPerPage={4} items={ListPostExamples} />
    </div>
  )
}

export default ManagePost