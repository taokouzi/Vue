<template>
	<div id='users'>
		<ul>
			<li v-for="user in usersA" :key="user.id">
				<h2>{{ user.name }}</h2>
				<h3>{{ user.position }}</h3>
			</li>
		</ul>
	</div>
</template>

<script>
	
	

	export default{
		name: 'users',
		props:{
			usersA:{
				type:Array
			}
		},
		data(){
			return {
				
			}
		},
		methods:{

		}

	}
</script>

<style scoped>
	#users{width: 100%;max-width: 1200px;margin:40px auto;padding: 0 20px;box-sizing: border-box;}
	
	ul{
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
	}

	li{
		flex-grow: 1;
		flex-basis: 200px;
		text-align: center;
		padding: 30px;
		border:1px solid #000;
		margin: 10px;
	}


</style>