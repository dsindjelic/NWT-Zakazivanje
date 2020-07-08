<template>
  <div id="user-form">
    <form class="user-form">
      <div>
        <h2>Unesite svoje podatke</h2>

        <input type="text" placeholder="Ime" v-model="user.name" />
        <input type="text" placeholder="Prezime" v-model="user.surname" />
        <input type="text" placeholder="broj telefona" v-model="user.tel" />
        <button v-on:click.prevent="findTerms">Prikazi termine</button>
      </div>
    </form>
    <form>
      <div v-if="appts.length" id="satnice">
        <ul>
          <li v-for="apt  in appts" @click="unscheduleTerm(apt)" v-bind:key="apt.index">
            <h2>{{apt.business}}</h2>
            <h3>{{ apt.date }}</h3>
            <h3>{{apt.time}}</h3>
            <h3>{{apt.collID}}</h3>
          </li>
        </ul>
      </div>
      <div v-if="noTerms">
        <h3>Zao nam je, za navedene podatke nismo pronasli ni jedan zakazani termin</h3>
      </div>
    </form>
  </div>
</template>


<script>
import db from "../firebase/credentials";

export default {
  data() {
    return {
      user: {
        name: "",
        surname: "",
        tel: ""
      },
      appointment: {
        date: "",
        time: "",
        business: ""
      },
      appts: [],
      apptsindexs: [],
      showTerms: false,
      noTerms: false
    };
  },
  methods: {
    findTerms: function() {
      this.appts = [];
      this.noTerms = false;
      let findUser = db
        .collection("scheduling")
        .where("name", "==", this.user.name)
        .where("surname", "==", this.user.surname)
        .where("tel", "==", this.user.tel);

      findUser.get().then(snapshot => {
        console.log(snapshot);
        snapshot.forEach(doc => {
          console.log(doc.id, doc.data());
          this.appts.push(doc.data());
          this.apptsindexs.push(doc.id);
        });

        console.log(
          this.user.name,
          this.user.surname,
          this.user.tel,
          Object.values(this.appts)
        );
        if (this.appts.length === 0) {
          this.noTerms = true;
          this.showTerms = false;
        } else {
          this.noTerms = false;
          this.showTerms = true;
        }
      });
    },
    unscheduleTerm: function(apt) {
      let collId = this.apptsindexs[this.appts.indexOf(apt)];
      console.log(collId);
      db.collection("scheduling")
        .doc(collId)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
      this.findTerms();
    }
  }
};
</script>
<style scoped>
#user-form * {
  box-sizing: border-box;
}
#user-form {
  margin: 20px auto;
  max-width: 500px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
input,
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
  background: beige;
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
</style>