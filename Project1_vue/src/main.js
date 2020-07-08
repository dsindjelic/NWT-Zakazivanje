import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueResource from 'vue-resource'
import store from './store'
import {firestorePlugin} from 'vuefire'
import moment from 'moment'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(firestorePlugin);
const router=new VueRouter({
  mode:'history',
  routes:Routes
})
//Filteri
Vue.filter('formattingDate', function(value) {
  if (value) {
    return moment(String(value)).format('MMM DD YYYY')
  }
})




new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
  store
})
