import Vue from 'vue'
import Router from 'vue-router'
import MenuPrincipal from '@/components/MenuPrincipal'
import pruebas from '@/components/pruebas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pruebas',
      component: pruebas
    },
    {
      path: '/menu',
      name: 'MenuPrincipal',
      component: MenuPrincipal
    }
  ]
})
