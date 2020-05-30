<template>
  <div id="app">
    <!--h2>Welcome to Scheduling App, sign in please</h2>
    <input type="text"  v-model="user.name"/>
    <input name="inpUsername" type="password" value="password"/>
    <button name="btnSubmit" title="submit" v-on:click="welcome">Welcome</button>
    <button name="btnSubmit2" title="submit" v-on:click="submit">Submit</button>
    <h3 > {{por}}</h3>-->
    
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header.vue'
//import addUser from './components/addUser.vue'
//import addBusiness from './components/addBusiness.vue'
//import scedulingClient from './components/schedulingClient.vue'
export default {
  components:{    
    'app-header':header,
    //'add-user':addUser,
   // 'add-business':addBusiness,
   // 'scheduling-client':scedulingClient
  },
  
  data () {
    return {
      msg: 'welcome ',
      usrnm:'',
      wlc:'',
      por:'',
      user: {
        name: '',
        password: ''
      }
    }
  },
  methods:{
    welcome(){
      this.por = "Zdravo " + this.user.name
      return this.msg + this.usrnm;
    },    
    submit () {
      // http clinet, npr. axios.post...
      console.log('USER', this.user)
    },
  },
    computed:{
     
    }
  }

</script>

<style>
#app{
  text-align: center;
}

h1, h2 {
  font-weight: normal;
  color: cornflowerblue;
  margin: 0 auto;
}
h3{
  color: blue;
  margin: 0 auto;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}


</style>