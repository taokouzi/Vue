<template>
  <div id="app-footer">
	<p>{{ copyright }} - {{ msg }}</p>
  </div>
</template>

<script>


export default {
  name: 'app-footer',
  props:{
  	msg:{
  		type:String
  	}
  },
  data:function(){
    return {
    	copyright: 'copyright 2019 vue demo'
    }
  },
}
</script>

<style scoped>
	
	#app-footer{
		background: #000;
		padding: 2px;
	}
	p{
		color: #ffffff;
		text-align: center;
	}


</style>
