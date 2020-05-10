import showBlogs from './components/showBlogs.vue'
import addBlog  from './components/addBlog.vue'
import singleBlog from './components/singleBlog.vue'
import addUser from './components/addUser.vue'
import addBusiness from './components/addBusiness.vue'
import schedulingClient from  './components/schedulingClient.vue'

export default[
    {path:'/', component:showBlogs},
    {path:'/add', component:addBlog},
    {path:'/adduser', component:addUser},
    {path:'/addbusiness', component:addBusiness},
    {path:'/blog/:id', component:singleBlog},
    {path:'/schedulingclient', component:schedulingClient}
]