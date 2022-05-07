import Vue from 'vue'
import Router from 'vue-router'
import MenuPrincipal from '@/components/MenuPrincipal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MenuPrincipal',
      component: MenuPrincipal
    }
  ]
})
