<template>
  <div id="scheduling-client">
    <h3>Izaberite salon:</h3>
    <form v-if="!submitted">
      <select v-model="activity">
        <option
          v-for="activiti in act"
          v-bind:key="activiti.bname"
          class="scheduling-client"
        >{{activiti.bname}}</option>
      </select>
    </form>

    <div>
      <h3>Odaberite datum</h3>
      <p>
        <date-picker
          @change="updateDate"
          :value="date"
          lang="sr"
          :first-day-of-week="1"
          :not-before="new Date()"
          :format="dateFormat"
        ></date-picker>
      </p>

      <h2 v-if="date!=''">Datum {{date| formattingDate }}</h2>
    </div>
    <br />

    <form>
      <div v-if="isOpenDate" id="satnice">
        <ul>
          <li v-for="hour in hours" @click="doBooking" v-bind:key="hour.hour">
            <h2>{{ hour.hour }}:{{hour.minutes}}</h2>
          </li>
        </ul>
      </div>
      <div v-else>
                <br><br>
                <h1  class="notOpenDay">Zao nam je, {{date| formattingDate}} je neradni. Pokusajte neki drugi dan</h1>
            </div>
    </form>
  </div>
</template>

<script>
//import Vue from '../main'
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/sr";
//import schedule from '../config/schedule';
//import Datepicker from 'vuejs-datepicker';

//import Calendar from 'v-calendar/lib/components/calendar.umd'
//import DatePicker from 'v-calendar/lib/components/date-picker.umd'

//Vue.component('calendar', Calendar)
//Vue.component('date-picker', DatePicker)

export default {
  components: {
    //'datepicker': Datepicker,
    DatePicker
    //Calendar,
    //DatePicker
  },

  data() {
    return {
      hours: [
        { hour: 9, minutes: "00" },
        { hour: 9, minutes: "30" },
        { hour: 10, minutes: "00" },
        { hour: 10, minutes: "30" },
        { hour: 11, minutes: "00" },
        { hour: 11, minutes: "30" },
        { hour: 12, minutes: "00" },
        { hour: 12, minutes: "30" },
        { hour: 13, minutes: "00" },
        { hour: 13, minutes: "30" },
        { hour: 16, minutes: "30" },
        { hour: 17, minutes: "00" },
        { hour: 17, minutes: "30" },
        { hour: 18, minutes: "00" },
        { hour: 18, minutes: "30" },
        { hour: 19, minutes: "00" }
      ],
      // Nedelja 0, Ponedeljak 1, Utorak 2, Sreda 3, Cetvrtak 4, Petak 5, Subota 6
      openDays: [1, 2, 3, 4, 5],
    

      dateFormat: "DD-MM-YYYY",
      lang: {
        formatLocale: {
          firstDayOfWeek: 1
        },
        monthBeforeYear: false
      },
      date: new Date(),

      //  id: this.$route.params.id,
      business: {},
      activities: [],
      act: [],
      newBooking: {
        name: "",
        phone: "",
        fixture: {}
      },
      isBooking: false,
      showBookingModal: false,
      //nameBusiness:[],

      //{
      //     busername:'',
      //    bpsw:'',
      //  brepsw:'',
      //activity:'',
      //bn/ame:'',
      //baddress:'',
      //btel:'',
      //bmail:''
      //},
      // activities:['Haircut', 'Fitness','Dentist'],
      submitted: false
    };
  },
  methods: {
    updateDate: function(date) {
      let newDate = new Date(date);
      newDate.setHours(12);
      this.date = newDate;
      console.log(date);
    },
    doBooking: function() {}
    // removeSpace:function(a){
    //  b=a.filter(function(){
    //  return a.activity
    // })
    // customFormatter(date) {
    //return moment(date).format('MMMM Do YYYY');
    // }
  },
  computed: {
    isOpenDate() {
              
               console.log('dan u nedelji '+new Date(this.date).getDay())
               //return 1 
               return this.openDays.includes(new Date(this.date).getDay());
  },
  },
  created() {
    this.$http
      .get("https://scheduling-nwt.firebaseio.com//business.json")
      .then(function(data) {
        console.log(data);
        this.activities = data.body;
        //JSON.parse(data.body).forEach(element => {
        // if(Object.keys(element).hasOwnProperty('activity')){
        this.act = data.body;
        // }
        // });

        console.log(this.act);
      });
  }
};
</script>

<style scoped>
#scheduling-client * {
  box-sizing: border-box;
}
#scheduling-client {
  margin: 20px auto;
  max-width: 500px;
}
datepicker {
  padding: 30px 30px;
  border: 1px dotted #ccc;
  margin: 50px 10;
}
label {
  text-align: right;
  float: left;
  display: block;
  margin-right: 10px;
}
input,
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
  background: beige;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
  color: lightskyblue;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
  margin-right: 10px;
}
#satnice {
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
  justify-content: space-between;

  padding: 0;
}
li {
  border-radius: 10px;
  width: 150px;
  height: 100px;
  flex-grow: 1;
  flex-basis: 10%;
  background-color: lightgreen;
  text-align: center;
  padding: 10px;
  border: 2px solid black;
  box-shadow: 0px 0px 5px  gray;
  margin: 10px;
  cursor: pointer;
}
.isBooked {
  background-color: lightcoral;
}
.notOpenDay{
  color: red;
}
</style>