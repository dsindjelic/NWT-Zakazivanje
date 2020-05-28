import addUser from './components/addUser.vue'
import addBusiness from './components/addBusiness.vue'
import schedulingClient from  './components/schedulingClient.vue'

export default[
    {path:'/', component:schedulingClient},
    {path:'/adduser', component:addUser},
    {path:'/addbusiness', component:addBusiness},
    {path:'/schedulingclient', component:schedulingClient}
]