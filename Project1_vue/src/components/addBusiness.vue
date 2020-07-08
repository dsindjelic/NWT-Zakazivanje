<template>
  <div id="add-business">
    <form v-if="!submitted">
      <h2>Unesite svoje podatke:</h2>

      <label>Korisnicko ime:</label>
      <input type="text" name="busername" v-model.lazy="business.busername" @change="checkbsrnm" />
      <label>Lozinka:</label>
      <input name="bpassword" type="password" v-model="business.bpsw" />
      <label>Ponovite lozinku:</label>
      <input name="brepassword" type="password" v-model.lazy="business.brepsw" @change="pswrds" />
      <label>Ime firme:</label>
      <input type="text" v-model="business.bname" />
      <label>Delatnost:</label>
      <select v-model="business.activity">
      <option v-for="delatnost in delatnosti" v-bind:key="delatnost">{{delatnost}}</option>
      </select>
      <label>Telefon:</label>
      <input type="text" v-model="business.btel" />
      <label>Elektronska posta:</label>
      <input type="text" v-model="business.bmail" />
      <label>Web sajt:</label>
      <input type="text" v-model="business.site" />

      <button v-on:click.prevent="post">Napravi nalog</button>
      <p>{{nanaslovnu}}</p>
    </form>

    <div id="preview" v-if="submitted">
      <div>
        <h3>Kreirali ste vas nalog!</h3>
      </div>

      <p>Korisnicko ime: {{business.busername}}</p>
      <p>Naziv: {{business.bname}}</p>
      <p>Delatnost: {{business.activity}}</p>
      <p>Address: {{business.baddress}}</p>
      <p>Telefon: {{business.btel}}</p>
      <p>Elektronska posta: {{business.bmail}}</p>

      <router-link to="/schedulingclient">
        <p>Na pocetnu</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { focus } from "vue-focus";

export default {
  directives: { focus: focus },
  data() {
    return {
      activities: {
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
      delatnosti: ["Frizerski salon", "Fitnes", "Zubar"],
      submitted: false,
      nanaslovnu: "",
      act: []
    }
  },
  methods: {
    post: function() {
      this.$http
        .post(
          "https://scheduling-nwt.firebaseio.com//business.json",
          this.business
        )
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        })
    },
    
    /*
    checkbsrnm:function(){
        console.log(Object.keys(this.act).length)
        for(var prop in this.act){
            console.log(this.act[prop].busername)
            if(this.act[prop].busername===this.business.busername){
                alert('Navedeno korisnicko ime vec postoji. Pokusajte ponovo sa nekim drugim.');
            }
        }
       */
    //for(let i=0;i<this.act.length;i++){
    //Object.keys(this.act).forEach(function(item){if(item.busername==this.business.busername){
    // alert('Ima')
    //  }
    //if(this.act[keys[i]].busername===this.business.busername){
    // alert();
    // console.log("postoji"+this.activities.busername)
    // console.log(i+'.'+this.activities.busername)
    // }
    //  })

   // tohome: function() {
      // this.nanaslovnu= '<router-link to="/schedulingclient"></router-link>'
     // $router.push("/schedulingclient", schedulingClient);
    //},
    pswrds: function() {
      if (this.business.bpsw != this.business.brepsw) {
        alert("Lozinke se ne slazu, pokusajte ponovo!")
      }
    }
  },
  created() {
    this.$http
      .get("https://scheduling-nwt.firebaseio.com//business.json")
      .then(function(data) {
        console.log(data);
        //this.activities=data.body;
        this.act = data.body;
        console.log(this.act);
      });
  }
};
</script>

<style scoped>
#add-business * {
  box-sizing: border-box;
}
#add-business {
  margin: 20px auto;
  max-width: 500px;
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