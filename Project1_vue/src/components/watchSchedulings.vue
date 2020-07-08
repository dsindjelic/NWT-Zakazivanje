<template>
  <div id="watch-schedulings">
    <form v-if="!auth">
      <div>
        <h2>Unesite svoje podatke:</h2>
        <input
          type="text"
          name="busername"
          v-model="business.busername"
          placeholder="korisnicko ime"
        />
        <input name="bpassword" type="password" v-model="business.bpsw" placeholder="lozinka" />
        <button v-on:click.prevent="logIn(business.busername,business.bpsw)">Prijavi se</button>
        <h3>{{this.businessName}}</h3>
      </div>
    </form>
    <form v-if="auth">
      <div>
        <h2>Dobrodosli, {{this.businessName}}</h2>
        <h3>Ovde možete da vidite rezervacije termina za odredjeni datum</h3>
        <p>
          <date-picker
            @change="changeDate"
            v-model="date"
            :value="date"
            lang="sr"
            :first-day-of-week="1"
            :not-before="new Date()"
            :format="dateFormat"
          ></date-picker>
        </p>
      </div>
      <div v-if="appts.length" id="schedulings">
        <ul>
          <li v-for="apt  in appts"  v-bind:key="apt.index">
            <h2>{{apt.time}}</h2>
            <h3>{{apt.name }}</h3>
            <h3>{{apt.surname}}</h3>
            <h3>tel: {{apt.tel}}</h3>
          </li>
        </ul>
      </div>
      <div v-if="noTerms">
        <h3>Za navedeni datum nismo pronašli ni jedan zakazani termin</h3>
      </div>
      <button v-on:click="logOff">Odjavi se</button>

    </form>
  </div>
</template>
<script src = "https://cdn.firebase.com/js/client/2.4.2/firebase.js"></script>


<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/sr";
import rdbase from "../firebase/credentials";
import firebase from "firebase";
import db from "../firebase/credentials";

export default {
  components: {
    DatePicker
  },
  data() {
    return {
      dateFormat: "MMM DD  YYYY",
      date: new Date(),
      // auth: true,
      business: {
        busername: "",
        bpsw: "",
        brepsw: "",
        activity: "",
        bname: "",
        baddress: "",
        btel: "",
        bmail: "",
        site: ""
      },
      businessName: "",
      appointment: {
        date: "",
        time: "",
        name: "",
        surname: "",
        tel: ""
      },
      appts: [],
      apptsindexs: [],
      showTerms: false,
      noTerms: false
    };
  },
  computed: {
    auth() {
      return this.businessName != "";
    }
  },
  methods: {
    logIn: function(usrnm, psw) {
      console.log("1.", this.business.busername, this.business.bpsw);
      const that = this;      
      let ref = firebase.database().ref("business/");
      ref.orderByValue().on(
        "value",
        function(data) {
          data.forEach(function(data) {
            if (usrnm == data.val().busername && psw == data.val().bpsw) {
              console.log("2", usrnm, psw, data.val().bname);
              that.businessName = data.val().bname;
            }
          });
        },
        function(error) {
          console.log("Error: " + error.code);
        }
      );
    },
    logOff:function(){
      $forceUpdate();
      this.date=new Date();
      this.businessName = "";

    },
    changeDate: function(date) {
      let newDate = new Date(date);
      this.date = newDate;
      console.log(this.date.toDateString().slice(4));
      this.findAppointments();
    },
    findAppointments: function() {
      this.appts = [];
      this.noTerms = false;
      let findAppt = db
        .collection("scheduling")
        .where("date", "==", this.date.toDateString().slice(4))
        .where("business", "==", this.businessName);

      findAppt.get().then(snapshot => {
        console.log(snapshot);
        snapshot.forEach(doc => {
          console.log(doc.id, doc.data());
          this.appts.push(doc.data());
          this.apptsindexs.push(doc.id);
        });

        console.log(this.businessName, Object.values(this.appts));
        if (this.appts.length === 0) {
          this.noTerms = true;
          this.showTerms = false;
        } else {
          this.noTerms = false;
          this.showTerms = true;
        }
      });
    }
  }
};
</script>
<style scoped>
#watch-schedulings * {
  box-sizing: border-box;
}
#watch-schedulings {
  margin: 20px auto;
  max-width: 500px;
}
h3 {
  margin-top: 10px;
  color: lightskyblue;
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
  background: lightgoldenrodyellow;
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
  height: 200px;
  flex-grow: 1;
  flex-basis: 10%;

  text-align: center;
  padding: 10px;
  border: 2px solid black;
  background: blanchedalmond;
  box-shadow: 0px 0px 5px gray;
  margin: 10px;
}
</style>