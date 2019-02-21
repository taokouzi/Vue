<template>
  <div class="showBlogs">
   <h1>博客总览</h1>

   <input type="text" v-model="search" placeholder="搜索">
    <h2 v-if="loading">加载中...</h2>
   <div class="single-blog" v-for="item in filteredBlogs" :key="item.id">
        <router-link :to="{path:'/blog/' + item.id}">
            <h2 v-rainbow>{{ item.title | toUppercase }}</h2>
        </router-link>
       <article>{{ item.body | snippet }}</article>
   </div>
  </div>

</template>

<script>
export default {
  name: 'showBlogs',
  data () {
    return {
      blogs:[],
      search:"",
      loading:true
    }
  },
  created(){
    this.$http.get("http://jsonplaceholder.typicode.com/posts").then(res=>{
        
        this.blogs = res.data.slice(0,10)

        this.loading = false;
        console.log(this.blogs)
    })
  },
  computed:{
      filteredBlogs(){
          return this.blogs.filter(blog=>{
              return blog.title.match(this.search)
          })
      }
  },
//   自定义过滤器
  filters:{
      toUppercase(value){
          return value.toUpperCase()
      }
  },
//   自定义指令
  directives:{
      rainbow:{
          bind(el, bingding, vnode){
              el.style.color = '#'+Math.random().toString(16).slice(2,8);
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .showBlogs{
      max-width: 800px;margin:0 auto;
  }
  .single-blog{
      padding: 20px;
      margin:20px 0;
      box-sizing: border-box;
      background: #eeeeee;
      border: 1px solid #aaa;
  }
  a{
      display: inline-block;
      color: #444;
  }
  input[type='text']{
      padding: 8px;
      width: 100%;
      box-sizing: border-box;
  }
</style>
