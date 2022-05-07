import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MenuPrincipal from '@/components/MenuPrincipal'
import Qualificacions from '@/components/Qualificacions'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/menu',
      name: 'MenuPrincipal',
      component: MenuPrincipal
    },
    {
      path: '/qualificacions',
      name: 'Qualificacions',
      component: Qualificacions
    }
  ]
})
