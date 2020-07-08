<template>
  <div id="scheduling-client">
    <form v-if="!submitted">
      <h3>Izaberite delatnost</h3>
      <select v-model="delatnost" @change="onChangeD($event)">
        <option v-for="del in delatnosti" v-bind:key="del">{{del}}</option>
      </select>

      <h3>Izaberite salon:</h3>

      <select v-model="act" @change="onChange($event)">
        <option
          class="scheduling-client"
          v-for="item in selectActivity"
          v-bind:key="item.index"
        >{{item.bname}}</option>
      </select>
    </form>
    <div>
      <h3>Odaberite/potvrdite datum</h3>
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
          <li
            v-for="hour in hours"
            @click.prevent="makeModalForm(hour)"
            v-bind:key="hour.index"
            :class="{'isBooked':hour.booked, 'free':!hour.booked}"
          >
            <h2>{{ hour.hour }}</h2>
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
    <form v-if="showBookingModal" class="modal-form">
      <div>
        <h2>Unesite svoje podatke</h2>
        <!--label > Ime:</label>-->
        <input type="text" name="username" placeholder="Ime" v-model="newBooking.name" />
        <!--label > Prezime:</label-->
        <input type="text" placeholder="Prezime" v-model="newBooking.surname" />
        <!--label > telefon:</label-->
        <input type="text" placeholder="broj telefona" v-model="newBooking.tel" />

        <button v-on:click.prevent="doBooking(selectedHour)">Zakazi termin</button>
        <h2 v-if="booked">Zakazali ste za {{date|formattingDate}} u {{this.selectedHour.hour}}</h2>
        <button v-on:click="showBookingModal=false">Zatvori</button>
      </div>
    </form>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/sr";
import db from "../firebase/credentials";

export default {
  components: {
    DatePicker
  },

  data() {
    return {
      delatnosti: ["Frizerski salon", "Fitnes", "Zubar"],
      delatnost: "",
      hours: [
        { hour: "09:00", booked: false },
        { hour: "09:30", booked: false },
        { hour: "10:00", booked: false },
        { hour: "10:30", booked: false },
        { hour: "11:00", booked: false },
        { hour: "11:30", booked: false },
        { hour: "12:00", booked: false },
        { hour: "12:30", booked: false },
        { hour: "13:00", booked: false },
        { hour: "13:30", booked: false },
        { hour: "14:00", booked: false },
        { hour: "14:30", booked: false },
        { hour: "16:30", booked: false },
        { hour: "17:00", booked: false },
        { hour: "17:30", booked: false },
        { hour: "18:00", booked: false }
      ],
      // Nedelja 0, Ponedeljak 1, Utorak 2, Sreda 3, Cetvrtak 4, Petak 5, Subota 6
      openDays: [1, 2, 3, 4, 5],
      schedulings: [],
      sced: [],
      selectedBusiness: "",
      booked: false,
      selectedHour: "",
      date: new Date(),

      dateFormat: "MMM DD  YYYY",
      lang: {
        formatLocale: {
          firstDayOfWeek: 1
        },
        monthBeforeYear: false
      },
      bussines: {},
      activities: [],
      act: [],
      newBooking: {
        name: "",
        nickname: "",
        psw: "",
        repsw: "",
        phone: ""
      },
      isBooking: false,
      showBookingModal: false,
      submitted: false
    };
  },
  methods: {
    updateDate: function(date) {
      console.log("system date =", new Date())
      let newDate = new Date(date);
      this.date = newDate;
      this.hours.forEach(element => {
        element.booked = false;
      });
      
      console.log(this.date);
      this.byDate();
    },
    byDate: function() {
      let bydate = db
        .collection("scheduling")
        .where("date", "==", this.date.toDateString().slice(4));
      bydate.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.hours.forEach(element => {
            if (
              element.hour == doc.data().time &&
              doc.data().business == this.selectedBusiness
            ) {
              element.booked = true;
            }
          });
        });
      });
    },
    makeModalForm: function(hour) {
      if (hour.booked) {
        alert("Zao nam je, termin je zakazan!");
      } else {
        this.showBookingModal = true;
        this.selectedHour = hour;
        console.log("selected hour", this.selectedHour.hour);
      }
    },
    doBooking: function(ind) {
      if (ind.booked) {
        alert("Zao nam je, termin je zakazan!");
      } else {
        console.log(
          "showBooking",
          this.showBookingModal,
          "selected hour",
          ind.hour
        );
        let bookingDate = this.date.toDateString().slice(4);

        //dodavanje kolekcije u firestore

        console.log(ind.hour, bookingDate, this.booked, this.selectedBusiness);
        db.collection("scheduling")
          .add({
            date: bookingDate,
            time: ind.hour,
            name: this.newBooking.name,
            surname: this.newBooking.surname,
            tel: this.newBooking.tel,
            business: this.selectedBusiness
          })
          .then(
            console.log(
              this.date,
              ind.hour,
              this.newBooking.name,
              this.newBooking.surname,
              this.selectedBusiness
            )
          )
          .catch(err => {
            console.log(err);
          });
        return (ind.booked = true);
      }
    },
    onChange: function(event) {
      this.selectedBusiness = event.target.value;
      console.log("izabrana firma je", this.selectedBusiness);
      console.log("system date  = ",this.date);
    },
    onChangeD: function(event) {
      this.delatnost = event.target.value;
      console.log("delatnost je ", this.delatnost);
    },
    getFromFirestore: function() {
      let bydate = db
        .collection("scheduling")
        .where("date", "==", this.date.toDateString().slice(4));
      bydate.get().then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc);
        });
      });
    }
  },
  computed: {
    isOpenDate() {
      console.log("dan u nedelji " + new Date(this.date).getDay());
      //return 1
      return this.openDays.includes(new Date(this.date).getDay());
    },
    selectActivity: function() {
      console.log("delatnost=", this.delatnost);
      if (this.delatnost != "") {
        console.log(Object.values(this.activities));
        return Object.values(this.activities).filter(
          i => i.activity === this.delatnost
        );
      }
      return this.activities;
    }
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

    db.collection("scheduling")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.sced.push(doc.data());
          console.log(doc.data(), doc.id);
        });
        console.log(this.sced);
      });
    this.byDate();
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

  text-align: center;
  padding: 10px;
  border: 2px solid black;
  box-shadow: 0px 0px 5px gray;
  margin: 10px;
  cursor: pointer;
}
.free {
  background-color: lightgreen;
}
.isBooked {
  background-color: lightcoral;
  cursor: not-allowed;
}
.notOpenDay {
  color: red;
}
.modal-form {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(100, 200, 100, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
</style>