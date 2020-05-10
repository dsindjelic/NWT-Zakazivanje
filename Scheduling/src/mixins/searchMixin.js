export default{
    computed: {
        filteredBlogs:function(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search);
                })
    }
    },

computed:{
    nameBusiness:function(){
        return this.business.filter((business)=>{
            return business.activity.match()
        })
    }
}

}