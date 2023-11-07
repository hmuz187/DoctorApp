import { Link } from 'react-router-dom'

import icons from '../../utils/icon/reactIcon'
import { AdminLinkRoute } from '../../routes/AdminLinkRoutes'
import { admin, ncl } from '../../assets/images/index'
import { AdminFooter } from '../../components/adminComponents'

const LayoutAdmin = ({ children }) => {

  const { IoListCircleOutline, HiMiniShoppingCart, BsShop, AiOutlineSearch, AiOutlineHome, MdOutlinePostAdd, FaClipboardList, BsFillImageFill, BiSolidCategoryAlt, HiUserGroup, AiFillTags, BsFillFileEarmarkBarGraphFill } = icons

  return (
    <div>
      <div className=''>
        <div className="flex flex-col h-fit font-poppins antialiased">
          <div id="view" className="min-h-full w-full flex flex-row ">
            {/* siderbar */}
            <div className="bg-white min-w-[180px] overflow-x-hidden transition-transform duration-300 ease-in-out">
              <div className="space-y-6 md:space-y-10 mt-10">
                <div id="profile" className="space-y-3">
                  <img src={ncl} alt="Avatar user" className="w-20 rounded-full mx-auto" />
                  <div>
                    <h2 className="font-medium text-xs text-center text-teal-500" >Chanh Ly</h2>
                    <p className="text-xs text-gray-500 text-center">Administrator</p>
                  </div>
                </div>


                <div id="menu" className="flex flex-col space-y-2">
                  <Link to={AdminLinkRoute.HOMEPAGE} className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out" >
                    <AiOutlineHome className="w-6 h-6 fill-current inline-block" />
                    <span className=""> Back to Home</span>
                  </Link>
                  <Link to={AdminLinkRoute.DASHBOARD} className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out" >
                    <BiSolidCategoryAlt className="w-6 h-6 fill-current inline-block" />
                    <span className=""> Dashboard</span>
                  </Link>
                  <Link to={AdminLinkRoute.ADD_POST} className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out" >
                    <MdOutlinePostAdd className="w-6 h-6 fill-current inline-block" />
                    <span className=""> Add Post</span>
                  </Link>
                  <Link to={AdminLinkRoute.LIST_POST} className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                    <FaClipboardList className="w-6 h-6 fill-current inline-block" />
                    <span className=""> Manage Post</span>
                  </Link>

                  <Link to={AdminLinkRoute.CATEGORY} className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                    <IoListCircleOutline className="w-6 h-6 fill-current inline-block" />
                    <span className=""> Post Category</span>
                  </Link>
                  <Link to={AdminLinkRoute.GALLERY} className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out" >
                    <BsFillImageFill className="w-6 h-6 fill-current inline-block" />
                    <span className=""> Gallery</span>
                  </Link>
                  <Link to={AdminLinkRoute.MANAGE_USER} className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out" >
                    <HiUserGroup className="w-6 h-6 fill-current inline-block" />
                    <span className=""> Manage Users</span>
                  </Link>
                  <Link to={AdminLinkRoute.MANAGE_TAG} className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out" >
                    <AiFillTags className="w-6 h-6 fill-current inline-block" />
                    <span className=""> Tags</span>
                  </Link>
                  <Link to={AdminLinkRoute.MANAGE_FILE} className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out" >
                    <BsFillFileEarmarkBarGraphFill className="w-6 h-6 fill-current inline-block" />
                    <span className=""> Files</span>
                  </Link>
                  <Link to={AdminLinkRoute.MANAGE_SHOP} className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out" >
                    <BsShop className="w-6 h-6 fill-current inline-block" />
                    <span className=""> Manage Shop</span>
                  </Link>
                  <Link to={AdminLinkRoute.ADD_PRODUCT} className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out" >
                    <HiMiniShoppingCart className="w-6 h-6 fill-current inline-block" />
                    <span className=""> Add Product</span>
                  </Link>
                </div>
                <hr />
                <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                  <input
                    type="text"
                    className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
                    placeholder="Search"
                  />
                  <button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
                    <AiOutlineSearch />
                  </button>
                </div>

              </div>
            </div>
            {/* main */}
            <div className='flex flex-col h-full w-full'>
              {children}
            </div>
          </div >
        </div >
      </div>

      <div className='bottom-0'>
        {/* footer */}
        <AdminFooter />
      </div >
    </div>

  )
}
export default LayoutAdmin