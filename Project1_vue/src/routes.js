import addUser from './components/addUser.vue'
import addBusiness from './components/addBusiness.vue'
import schedulingClient from  './components/schedulingClient.vue'
import unschedulingClient from  './components/unschedulingClient.vue'
import watchSchedulings  from './components/watchSchedulings.vue'

export default[
    {path:'/', component:schedulingClient},
    {path:'/adduser', component:addUser},
    {path:'/addbusiness', component:addBusiness},
    {path:'/unschedulingclient', component:unschedulingClient},
    {path:'/watchschedulings', component:watchSchedulings}
]