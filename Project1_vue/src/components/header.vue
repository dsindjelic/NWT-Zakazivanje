<template>
    <nav>
        <ul>
            <li><router-link to="/" exact>Zakazite termin</router-link></li>
            <li><router-link to="/unschedulingclient">Otkazite termin</router-link></li>
            <li><router-link to="/watchschedulings">Admin salon</router-link></li>
            <li><router-link to="/adduser">Novi korisnik</router-link></li>
            <li><router-link to="/addbusiness">Novi salon</router-link></li>
        </ul>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline;
    margin: 0 10px;
}
a{
color: #fff;
text-decoration: none;
padding: 6px 8px;
border-radius: 10px;
}
nav{
    background:deepskyblue;
    padding: 20px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: #444;
}
</style>