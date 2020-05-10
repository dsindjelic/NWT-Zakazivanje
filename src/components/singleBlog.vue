<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http.get("https://nn-vue-playlist-54bed.firebaseio.com//posts/" + this.id+'.json').then(function(data){
      return data.json()
        //console.log(data)
    }).this(function(data) {
      this.blog=data
    })
  }
};
</script>
<style scoped>
#single-blog{
    max-width: 900px;
    margin: 0 auto;
}
</style>