import Vue from 'vue'
import Router from 'vue-router'
import MenuPrincipal from '@/components/MenuPrincipal'
import Qualificacions from '@/components/Qualificacions'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
