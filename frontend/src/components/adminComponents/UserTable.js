import React from 'react'
import { useNavigate } from 'react-router-dom'
import icons from '../../utils/icon/reactIcon'

const UserTable = ({currentItems}) => {

    const ListUser = currentItems
    const {BiPencil, HiOutlineTrash} = icons 
    const navigate = useNavigate()
  
    return (
      <>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Role</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">WishList Product ID</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Bill Quantity</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Total Payment</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Edit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {ListUser.map((user, index) => {
                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div className="relative h-10 w-10">
                        <img className="h-full w-full rounded-full object-cover object-center" src={user.avatar} alt="" />
                        <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                      </div>
                      <div className="text-sm">
                        <div className="font-medium text-gray-700">{user.name}</div>
                        <div className="text-gray-400">{user.email}</div>
                      </div>
                    </th>
  
                    <td className="px-6 py-4">{user.role}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <span
                          className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                        >
                          SPK102
                        </span>
                        <span
                          className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
                        >
                          TPCN200
                        </span>
                        <span
                          className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
                        >
                          NK505
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"> {20} order </span>
                    </td>
                    <td className="px-6 py-4"> {1000} USD </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-4">
                        <HiOutlineTrash size={24} onClick={()=>{navigate(`/admin/deleteUser/${user.id}`)}}/>
                        <BiPencil size={24} onClick={()=>{navigate(`/admin/editUser/${user.id}`)}}/>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </>
    )
}

export default UserTable