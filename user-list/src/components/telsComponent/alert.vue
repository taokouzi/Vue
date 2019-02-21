<!-------------弹窗组件------------>
<template>
  <div id="alert" ref='alert'>
      <div class="alert">
          <div class="title">{{ ctName }}</div>
          <div class="body">{{ tel }}</div>
          <!-- 插槽 -->
          <slot name='alert'></slot>
      </div>
  </div>
</template>

<script>


export default {
  name: 'alert',
  data(){
    return {
        // tel: 0
    }
  },
  props:['ct-name','tel'],
  mounted(){
      console.log( '-------------' + this.$store.getters.tel )
    //   this.tel = this.$store.getters.tel || 0;
  }
}

</script>

<style scope>
    #alert{
        width: 100%;height: 100%;
        background: rgba(0,0,0,.5);
        position: fixed;
        left: 0;
        top:0;
        z-index: 999;
        display: none;
    }
    .alert{
        width: 200px;
        height: 150px;
        background: #fff;
        border-radius: 5px;
        margin:auto;
        position: relative;
    }
    .title{
        padding: 5px;
        border-bottom: 1px solid #ccc;
    }
    .body{
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
    .btn{
        position: absolute;
        right: 0;
        bottom: 0;
    }
    .btn button{
        margin:10px;padding: 5px;
    }
</style>
