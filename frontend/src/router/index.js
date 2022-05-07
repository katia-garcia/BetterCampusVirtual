import Vue from 'vue'
import Router from 'vue-router'
import MenuPrincipal from '@/components/MenuPrincipal'
import Qualificacions from '@/components/Qualificacions'
import Assignatura from '@/components/Assignatura'

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
    },
    {
      path: '/factorshumans',
      name: 'Assignatura',
      component: Assignatura
    }
  ]
})
