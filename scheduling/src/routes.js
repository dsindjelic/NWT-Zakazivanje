import addUser from './components/addUser.vue'
import addBusiness from './components/addBusiness.vue'
import schedulingClient from  './components/schedulingClient.vue'

export default[
      {path:'/adduser', component:addUser},
    {path:'/addbusiness', component:addBusiness},
    {path:'/', component:schedulingClient}
]