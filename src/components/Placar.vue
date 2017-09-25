<template>
	<section>
	<div>
		<img src="http://www.naturalistotalalimentos.com.br/blog/wp-content/uploads/2015/01/9.gif">
		
		<div class="botão">
			<button @click='dog1mais'>+</button>
			<button @click='dog1menos'>-</button>
		</div>
		<p>{{Bob}}</p>
	</div>
	<div>
		<img src="http://www.modefica.com.br/wp-content/uploads/2014/11/gifs-cachorros-espelho-2.gif">
		<div class="botão">
			<button @click='dog2mais'>+</button>
			<button @click='dog2menos'>-</button>
		</div>
		<p>{{Fred}}</p>	
	</div>
	<div class="botão-limp">
		<button @click='limpar'>limpar</button>
	</div>
	<div class="botão-result">
		<button @click='Resultado'>Quem ganhou</button>
		<p>{{ganhador}}</p>
	</div>
	</section>
</template>
<script>
	export default {
		name: 'Placar',
		data (){
			return{
				Bob:0,
				Fred:0,
				ganhador:''

			}
		},
	methods:{
		dog1mais(){
			return this.Bob++
		},
		dog1menos(){
			return this.Bob--
		},
		dog2mais(){
			return this.Fred++
		},
		dog2menos(){
			return this.Fred--
		},
		limpar(){
			return this.Fred=0,
					this.Bob=0
		},
		Resultado(){
			if( this.Bob > this.Fred) {
				return this.ganhador='Bob GANHOUU!!'
			}
			if( this.Bob== this.Fred){
				return this.ganhador='Empate'
			}
			else{
				return this.ganhador='Fred GANHOUU!!!'
			}

		}

	}
}
</script>
<style scoped>
	img{
		
		width: 200px;
		height: 180px;
	} 
	div{
		display: flex;
		flex-direction: column;

	}
	section{
		display: flex;
		flex-direction: row;
	}
	.botão{
		width:20%;
		display:flex;
		flex-direction: row;

	}
	
	.botão-limp .botão-result{
		width:50%;
		display:flex;
		flex-direction: column;
		justify-content:flex-start;
		align-items: center;
	}
</style>