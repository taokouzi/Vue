<template>
  <div id="app-header">
	<h1 @click="changeMsg">{{ title }} - {{ msg }}</h1>
  </div>
</template>

<script>


export default {
  name: 'app-header',
  props:{
  	msg:{
  		type:String
  	}
  },
  data:function(){
    return {
    	title: 'vue.js demo'
    }
  },
  methods:{
  	changeMsg:function(){
  		this.$emit("msgChange","我吃饭了")
  	}
  },
  /*beforeCreate:function(){
  	console.log('1、beforeCreate 组件实例化之前')
  },
  created:function(){
  	console.log('2、create 组件实例化完毕，但页面还未显示')
  },
  beforeMount:function(){
  	console.log('3、beforeMount 组件挂载前，页面还未显示，但虚拟dom已经配置')
  },
  mounted:function(){
  	console.log('4、mounted 组件挂载后，页面显示')
  },
  beforeUpdate:function(){
  	console.log('5、beforeUpdate 组件更新前，页面还未更新，但是虚拟dom已经更新配置')
  },
  updated:function(){
  	console.log('6、updated 组件更新后，页面更新')
  },
  beforeDestroy:function(){
  	console.log('7、beforeDestroy 组件销毁前')
  },
  destroyed:function(){
  	console.log('8、destroyed 组件销毁')
  }*/
}
</script>

<style scoped>
	#app-header{
		background: #000;
		padding: 10px;
	}
	h1{
		color: #ffffff;
		text-align: center;
	}
</style>
