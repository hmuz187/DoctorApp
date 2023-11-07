import { BlankLayout, CheckComponent, DefaultLayout } from "../components/layout";
import { AdminLogin, AdminSignup, AdminDashBoard, AdminAddPost, AdminAddPicture, AdminAddPostCKEditor, AdminLayout, AdminManagePost, AdminPostCategory, AdminManageGallery, AdminManageUser, AdminManageTag, AdminManageFile, AdminManageShop, AdminAddProduct, AdminEditPost, AdminAddNewPost, AdminEditPostCK, AdminListAllPost } from "../pages/admin";
import Blog from "../pages/blog/public/Blog";
import { AboutInfoPage, MainInfoPage, BlogInfoPage } from "../pages/infomation";

const Routes = {
    //info
    InfoMain: { path: '/', component: MainInfoPage, layout: DefaultLayout },
    InfoAbout: {
        path: '/about', component: AboutInfoPage
        , layout: DefaultLayout
    },
    InfoBlog: {
        path: '/blog', component: BlogInfoPage
        , layout: DefaultLayout
    },

    InfoTest: {
        path: '/test', component: Blog
        , layout: CheckComponent
    },




    //admin
    DashboardOverview: { path: '/dashboard/overview', component: AdminDashBoard, layout: DefaultLayout },
    Signin: { path: '/admin/signin', component: AdminLogin, layout: BlankLayout },
    Signup: { path: '/examples/sign-up', component: AdminSignup, layout: BlankLayout },

    //blog



    //shop
}


const ListRoutes = [
    //info
    { path: '/', component: MainInfoPage, layout: DefaultLayout },
    { path: '/about', component: AboutInfoPage, layout: DefaultLayout },
    { path: '/blog', component: BlogInfoPage, layout: DefaultLayout },
    { path: '/test', component: null, layout: CheckComponent },



    //admin
    { path: '/admin/login', component: AdminLogin, layout: BlankLayout },
    { path: '/admin/signup', component: AdminSignup, layout: BlankLayout },
    { path: '/admin/dashboard', component: AdminDashBoard, layout: AdminLayout },
    { path: '/admin/listAllPost', component: AdminManagePost, layout: AdminLayout },
    { path: '/admin/listPostCard', component: AdminListAllPost, layout: AdminLayout },

    { path: '/admin/listCategory', component: AdminPostCategory, layout: AdminLayout },
    { path: '/admin/listImage', component: AdminManageGallery, layout: AdminLayout },
    { path: '/admin/listUser', component: AdminManageUser, layout: AdminLayout },
    { path: '/admin/listTag', component: AdminManageTag, layout: AdminLayout },
    { path: '/admin/listFile', component: AdminManageFile, layout: AdminLayout },
    { path: '/admin/manageShop', component: AdminManageShop, layout: AdminLayout },
    { path: '/admin/addProduct', component: AdminAddProduct, layout: AdminLayout },


    { path: '/admin/editPost', component: AdminEditPost, layout: AdminLayout },
    { path: '/admin/editPostCK', component: AdminEditPostCK, layout: AdminLayout },


    // { path: '/admin/addPost', component: AdminAddNewPost, layout: AdminLayout },
    { path: '/admin/addPost', component: AdminAddPostCKEditor, layout: AdminLayout },

    { path: '/admin/addPicture', component: AdminAddPicture, layout: AdminLayout },



    //blog



    //shop

]


export {
    Routes,
    ListRoutes
}








// const publicPath = '/public'
// const privatePath = '/private'

// const adminRoutes = [
//     { path: `${publicPath}/home`, component: AdminLogin },
// ]