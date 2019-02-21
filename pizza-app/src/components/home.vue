<template>
  <div class="row">

	<div id='home' class="cols-sm-12 text-center">
		<div class="background">
			<h1>欢迎大家品尝pizza</h1>
			<h2>这里有你非常喜欢的</h2>

			<button ref='btn' class="btn btn-success" @click="jump">跳转</button>
		</div>

	</div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      id: 258,


    }
  },
  methods:{
  	jump()
  	{
  		console.log(this.$refs.btn)
  		console.log(this)
  		console.log(this.$route) 	//可获取跳转对象中的参数
  		console.log(this.$router)	//跳转路径
  		// 返回上一级
  		// this.$router.go(-1)

  		// 跳转到指定页面
  		// this.$router.push('menu')
  		this.$router.push({ path:'menu', query:{ id: this.id } })  //跳转传参
  	}
  },
  created(){
  	// fetch('/apis/memberba/api/card_new.php?callback=lj_1548319123000qylist',{ 
  	// 	method:'post',
  	// 	header:{}
  	// 	body:JSON.stringify({ action:'qylist', token:'451261524d788de46f41c8bb872329b4118866bbce3a80a7eaff91c22f8468f' }) 
  	// })
  	// .then( data=>{
  	// 	console.log(data)
  	// 	return data.json();
  	// })
  	// .then( res=>{
  	// 	console.log(res)
  	// })
  	
  	
  		
  	this.$ajax.post('/apis/memberba/api/card_new.php',{
  		action:'for_img', 
  		token:'451261524d788de46f41c8bb872329b4118866bbce3a80a7eaff91c22f8468f'
  	}).then(res=>{
  		console.log(res)
  	})


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#home{
		background: #F3A872;
		width: 100%;
		height: 85vh;
		padding: 10%;
	}
	h1,h2{margin:6%;}
	.background{
		background: #eee;
		opacity: .8;
		max-width: 70vw;
		margin:0 auto;
		padding: 20px 0;
	}
</style>
