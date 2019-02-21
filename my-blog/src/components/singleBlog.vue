<template>
  <div class="singleBlog">
      <h1>{{ blog.title }}</h1>
      <article>{{ blog.body }}</article>
  </div>
</template>

<script>
export default {
  name: 'singleBlog',
  data () {
    return {
        id: this.$route.params.id,
        blog: {}
    }
  },
  created(){
      this.$http.get("http://jsonplaceholder.typicode.com/posts/"+this.id).then(res=>{
        //   console.log(res.data)
        this.blog = res.data
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .singleBlog{
        max-width: 960px;
        margin:0 auto;
        background: #eee;
        padding: 20px;
        border:1px solid #aaa;
    }
</style>
