
import React from 'react'

import { ListUser } from './DataExamples'
import UserTablePagination from '../../components/adminComponents/UserTablePagination'

const ManageUser = () => {

  return (
    <>
      <UserTablePagination items={ListUser} itemsPerPage={4}/>
    </>
  )
}

export default ManageUser




/*
import React from 'react'

import { ListUser } from './DataExamples'

const ManageUser = () => {

  return (
    <div>
      <div className="bg-gray-50 min-h-screen w-full">

        <div>
          <div className="p-4 w-full">
            <div className="bg-white p-4 rounded-md">
              <div>
                <h2 className="mb-4 text-xl font-bold text-gray-700">Admin & User</h2>
                <div>
                  <div>
                    <div className="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                      <div>
                        <span>Name</span>
                      </div>
                      <div>
                        <span>Email</span>
                      </div>
                      <div>
                        <span>Role</span>
                      </div>
                      <div>
                        <span>Time</span>
                      </div>
                      <div>
                        <span>Edit</span>
                      </div>
                    </div>
                    <div>
                      {ListUser.map((user, index) => {
                        return (
                          <div key={index} className="flex justify-between text-center border-t text-sm font-normal mt-4 space-x-4">
                            <div className="px-2 flex">
                              <span>{user.name}</span>
                            </div>
                            <div className='px-2 min-w-250'>
                              <span>{user.email}</span>
                            </div>
                            <div className="px-2">
                              <span>{user.role.toUpperCase()}</span>
                            </div>
                            <div className="px-2">
                              <span>{(new Date(user.time)).toDateString()}</span>
                            </div>
                            <div className="px-2">
                              <select>
                                <option>Admin</option>
                                <option>Writer</option>
                                <option>User</option>
                              </select>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageUser
*/

