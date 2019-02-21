<template>
  <div id="app">
    
    <blog-header></blog-header>

    <router-view></router-view>

  </div>
</template>

<script>

import blogHeader from './components/blogHeader'

export default {
  name: 'App',
  components:{
    "blog-header":blogHeader
  }
}
</script>

<style>

</style>
