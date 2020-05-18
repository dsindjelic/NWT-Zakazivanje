export default{
  
computed:{
    nameBusiness:function(){
        return this.business.filter((business)=>{
            return business.activity.match()
        })
    }
}

}