<template>
<section>
	
	<h2>Olá mundo!</h2>
	<label>Qual é o seu nome?</label>
<input  v-model="nome">
<p>Meu nome é {{nome}}</p>
<label>Qual é sua idade?</label>
<input v-model="idade">
<p>{{idade}}</p>
<gato></gato>
</section>
</template>
<script>
	import gato from './Gato.vue'
	export default {
		name: 'ola',
		components: {gato},		
		data(){
			return{
				nome:'',
				idade:''
			}
		}
	}
</script>

<style scoped>
	
</style>