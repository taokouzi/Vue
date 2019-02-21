<template>
  <div id="app">
    
    <div class="container">
      <app-header></app-header> 
    </div>
    

    <div class="container">
      <router-view></router-view> 
    </div> 
  
    
    <!-- 组件复用 -->
    <div class="container">
      <div class="row">
        <div class='col-sm-12 col-md-4'>
          <router-view name='ord'></router-view> 
        </div> 
        <div class='col-sm-12 col-md-4'>
          <router-view name='dlv'></router-view> 
        </div> 
        <div class='col-sm-12 col-md-4'>
          <router-view name='his'></router-view> 
        </div> 
      </div>
    </div> 

  </div>
</template>

<script>
import header from './components/header'

export default {
  name: 'App',
  components: {
    "app-header":header
  }
}
</script>

<style>

</style>
