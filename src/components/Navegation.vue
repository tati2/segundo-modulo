<template>
	<nav>
		<ul>
			<li>
			<img src="../assets/home.jpg">
				<router-link to="/">Home</router-link>
			</li>
			<li>
				<img src="../assets/folder.png">
				<router-link to="Portifolio">Portifolio</router-link>
			</li>

		</ul>
		</nav>
</template>
<script>
		export default {
		name:'Navegation',
		data(){
			return{
		}
	}
}
</script>
<style scoped>
nav{
	width: 20%;
	display: flex;
	justify-content:center;
	flex-direction:row;
}

img {
	width: 50px
}

	
</style>