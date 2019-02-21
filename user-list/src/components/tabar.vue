<template>
  <div id="tabar">

      <button @click="changeTabar(1)">菜单1</button>
      <button @click="changeTabar(2)">菜单2</button>
      <button @click="changeTabar(3)">菜单3</button>
      
        
      <keep-alive>
        <component :is="nowMenu"></component>    
      </keep-alive>



  </div>
</template>

<script>


export default {
  name: 'tabar',
  data(){
    return {
        nowMenu: 'my-menu-1'
    }
  },
  components:{
      'my-menu-1':{
          template: "<div>组件1 <input type='text'></div>"
      },
      'my-menu-2':{
          template: "<div>组件2 <input type='text'></div>"
      },
      'my-menu-3':{
          template: "<div>组件3 <input type='text'></div>"
      }
  },
  methods:{
      changeTabar(num)
      {
          this.nowMenu = 'my-menu-' + num;
      }
  }
}







</script>

<style>

</style>
