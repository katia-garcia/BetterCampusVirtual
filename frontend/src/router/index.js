import Vue from 'vue'
import Router from 'vue-router'
import MenuPrincipal from '@/components/MenuPrincipal'
import Qualificacions from '@/components/Qualificacions'
import Assignatura from '@/components/Assignatura'
import Practicas from '@/components/Assignatura_Practicas'
import Tasca from '@/components/Assignatura_Tasca'

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
      path: '/assignatura',
      name: 'Assignatura',
      component: Assignatura
    },
    {
      path: '/assignatura/practicas',
      name: 'Practicas',
      component: Practicas
    },
    {
      path: '/assignatura/practicas/tasca',
      name: 'Tasca',
      component: Tasca
    }
  ]
})
