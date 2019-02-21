<template>
  <div class="about">
	about
	<div class="row mb-5">
		<div class="col-4">
			<div class="list-group bd-5">
				<router-link tag='li' class='nav-link' to='history'>
					<a class="list-group-item list-group-item-action">历史订单</a>
				</router-link>	
				<router-link tag='li' class='nav-link' to='contact'>
					<a class="list-group-item list-group-item-action">联系我们</a>
				</router-link>	
				<router-link tag='li' class='nav-link' to='order'>
					<a class="list-group-item list-group-item-action">点餐文档</a>
				</router-link>	
				<router-link tag='li' class='nav-link' to='delivery'>
					<a class="list-group-item list-group-item-action">快递信息</a>
				</router-link>	
			</div>
		</div>
		<div class="col-8">
			
			<router-view></router-view>

		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
