<template>
  <div>
	
	<p style="margin-top:10rem;">（组件内守卫） 页面进入执行回调 && 页面离开执行回调</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '老哥'
    }
	},
	
	// 组件守卫
  beforeRouteEnter:function(to, from, next){
  	next(function( vm ){
  		alert('你好 '+vm.name);
  	})
  },
  beforeRouteLeave:function(to, from, next){
  	if( confirm('确定离开当前页面？') )
  	{
  		next();
  	}
  	else
  	{
  		next(false)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
