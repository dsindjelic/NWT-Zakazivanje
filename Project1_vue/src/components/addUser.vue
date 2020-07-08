<template>
    <div id="add-user">
        
        <form v-if="!submitted">
            <h2> Unesite svoje podatke: </h2>

            <label for="username"> Korisnicko ime:</label>
            <input type="text" name="username" v-model="user.username"/>
             <label > Lozinka:</label>
            <input type="password" v-model.lazy="user.psw" @change="pswrds"/>
             <label > Potvrdi lozinku:</label>
            <input type="password" v-model="user.repsw"/>
             <label > Ime:</label>
            <input type="text" v-model="user.name"/>
            <label > Prezime:</label>
            <input type="text" v-model="user.surname"/>
            <label > telefon:</label>
            <input type="text" v-model="user.tel"/>
            <label > e-mail:</label>
            <input type="text" v-model="user.mail"/>
            
            <button v-on:click.prevent="post">Kreiraj korisnika</button>
        </form >
        
    <div id="preview" v-if="submitted">
        <div>
      <h3>Kreirali ste korisnika</h3>
    </div>
        
        <p> Korisnicko ime: {{user.username}}</p>
        <p> Ime: {{user.name}}</p>
        <p> Prezime: {{user.surname}}</p>
        <p> Telefon: {{user.tel}}</p>
        <p> E-mail: {{user.mail}}</p>


        <button v-on:click="to-home">Na pocetnu</button>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user:{
                username:'',
                psw:'',
                repsw:'',
                name:'',
                surname:'',
                tel:'',
                mail:'',
            },
            submitted:false,
        }
    },
    methods:{
        post:function(){
      this.$http.post('https://scheduling-nwt.firebaseio.com//users.json',this.user).then(function(data){
        console.log(data)
        this.submitted=true
      })
    },
     pswrds: function() {
      if (this.business.bpsw != this.business.brepsw) {
        alert("Lozinke se ne slazu, pokusajte ponovo!");
      }
    }
    },

}
</script>

<style scoped>
#add-user *{
    box-sizing: border-box;
}
#add-user{
    margin: 20px auto;
    max-width: 500px;
}

label{
    text-align: right;
    float: left;
    display: block;
    margin-right: 10px;
}
input, textarea{
    display: block;
    width: 100%;
    padding: 8px;
    background: beige;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
    color: lightskyblue;
}
#checkboxes input{
display: inline-block;
margin-right: 10px;
}
#checkboxes label{
  display:inline-block;
  margin-right:10px;
}
</style>