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

      
        <h3>Odaberite datum </h3>
        <p>
        <date-picker
          :value="date"
          
          @change="updateDate"
          placeholder="Odaberite datum"
          :lang="lang"
          
          :not-before="new Date()"
        ></date-picker>
      </p>  
        
    </form>
    <h2 v-if="date!=null" class="title"> Datum {{date | dateParse('YYYY-MM-DD') | dateFormat('dd MM YYYY')}} </h2>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import 'vue2-datepicker/locale/sr';
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
      let date = new Date();
            date.setHours(12, 0, 0);
    return {
        lang: {
          formatLocale: {
            firstDayOfWeek: 1,
          },
          monthBeforeYear: false,
        },
      //date: "",
      
      //  id: this.$route.params.id,
      business: {},
      activities: [],
      act: [],
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
      updateDate: function (date) {
                let noviDatum = new Date(date);
                noviDatum.setHours(12);
                
                
              return  this.date = noviDatum.toDateString();
                
      },
    // removeSpace:function(a){
    //  b=a.filter(function(){
    //  return a.activity
    // })
    // customFormatter(date) {
    //return moment(date).format('MMMM Do YYYY');
    // }
  },
  computed:{
         calendar: function () {
                let calendar = [];
                this.schedule.forEach(hour => {
                    let date = new Date(this.date.toDateString() + ' 12:00:00');
                    date.setHours(hour.hour, hour.minutes, 0);

                    if (date >= new Date()) {
                        let reservation = this.reservations.filter(x => {
                            return x.date.seconds === (date.getTime() / 1000)
                        });
                        calendar.push({
                            hour: hour.hour,
                            minutes: hour.minutes,
                            isBooked: reservation.length === 1
                        });
                    }

                });
                return calendar;
            }

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
</style>