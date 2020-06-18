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
          <li  v-for="hour in hours" @click.prevent="doBooking(hour)" v-bind:key="hour.index" :class="{'isBooked':hour.booked, 'free':!hour.booked}">
            <h2>{{ hour.hour }}:{{hour.minutes}}</h2>
          </li>
        </ul>
      </div>
      <div v-else>
        <br />
        <br />
        <h1
          class="notOpenDay"
        >Zao nam je, {{date| formattingDate}} je neradni. Pokusajte neki drugi dan</h1>
      </div>
    </form>
  </div>
</template>

<script>
//import Vue from '../main'
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/sr";
import db from '../firebase/credentials'

export default {
  components: {
    DatePicker
   
  },

  data() {
    return {
      hours: [
        { hour: "9:00", booked:false},
        { hour: "9:30" ,booked:false},
        { hour: "10:00" ,booked:false},
        { hour: "10:30" ,booked:false},
        { hour: "11:00",booked:false},
        { hour: "11:30" ,booked:false},
        { hour: "12:00" ,booked:false},
        { hour: "12:30",booked:true},
        { hour: "13:00",booked:false },
        { hour: "13:30",booked:false },
        { hour: "14:00",booked:false },
        { hour: "14:30",booked:false },
        { hour: "16:30",booked:false },
        { hour: "17:00",booked:false },
        { hour: "17:30",booked:false },
        { hour: "18:00",booked:false },      
      ],
      // Nedelja 0, Ponedeljak 1, Utorak 2, Sreda 3, Cetvrtak 4, Petak 5, Subota 6
      openDays: [1, 2, 3, 4, 5],
      schedulings:[],

      booked:false,    

      dateFormat: "DD-MM-YYYY",
      lang: {
        formatLocale: {
          firstDayOfWeek: 1
        },
        monthBeforeYear: false
      },
      date: new Date(),

      //  id: this.$route.params.id,
      bussines: {},
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
    doBooking: function(ind) {
      if(ind.booked){
        alert('Zao nam je, termin je zakazan!')
      }else{     
       let bookingDate=this.date.toDateString().slice(4)
       //let index=e.target
    
       console.log(ind.hour,bookingDate,this.booked)
       db.collection('scheduling').add({
        date: bookingDate,
        time: ind.hour,
        user:'bane',
        business: "Pera frizer"
      }).then(
        console.log(this.date,ind.hour, this.user, this.business)
      )
      .catch(err=>{
        console.log(err)
      })
       return ind.booked=true
        }
     // 

    }
    
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
        
        this.act = data.body;
        

        console.log(this.act);
      });
 
  db.collection('scheduling').get()
  .then(snapshot=>{
    snapshot.forEach(doc=>{
      console.log(doc.data(),doc.id)
    })
  })
   },
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
  
  text-align: center;
  padding: 10px;
  border: 2px solid black;
  box-shadow: 0px 0px 5px gray;
  margin: 10px;
  cursor: pointer;
}
.free{
  background-color: lightgreen;

}
.isBooked {
  background-color: lightcoral;
    cursor:not-allowed;
}
.notOpenDay {
  color: red;
}
</style>