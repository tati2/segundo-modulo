import Vue from 'vue'
import Router from 'vue-router'
import Tchau from '@/components/Tchau'
import ola from '@/components/ola'
import Portifolio from '@/components/Portifolio'
import Placar from '@/components/Placar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tchau',
      component: Tchau
    },
    {
    	path:'/ola',
    	name:'ola',
    	component:ola
    },
    {
    	path:'/Portifolio',
    	name:'Portifolio',
    	component:Portifolio
    },
    { 
      path:'/Placar',
      name:'Placar',
      component:Placar

    }

 ]
})
