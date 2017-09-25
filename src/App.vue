<template>
  <div id="app">
    <router-view></router-view>
    <Navegation></Navegation>
   
  </div>
</template>

<script>
import Navegation from './components/Navegation'
export default {
  name: 'app',
  components:{Navegation},
  
}
</script>

<style scoped>
div{
  background-color: pink;
  display:flex;
  flex-direction: column;
  align-items: center;
}
  
</style>
