<template>
  <div id="app">
      
      <ul>
        <li><router-link to='/'>主页</router-link></li>
        <li><router-link to='/tabar'>tabar</router-link></li>
        <li><router-link to='/tels'>通讯录</router-link></li>
      </ul>

      <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'App'
}

</script>

<style>
#app>ul{
  background: #eee;
  list-style: none;
  display: flex;
  height: 40px;
  line-height: 40px;
  width: 100%;
  position: fixed;
  z-index: 10;
}
#app>ul li{
  flex: 1;
  text-align: center;
}
#app{
  /* text-align: center; */
}

.left{float: left;}
.right{float: right}
.clear:after{content: "";display: block;clear: both}
</style>
