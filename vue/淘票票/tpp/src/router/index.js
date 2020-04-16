import Vue from 'vue'
import Router from 'vue-router'

import film from '@/components/film/film'
import cinema from '@/components/cinema/cinema'
import mys from '@/components/mys/mys'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'film',
      component: film
    },
    {
      path: '/film',
      name: 'film',
      component: film
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: cinema
    },
    {
      path: '/mys',
      name: 'mys',
      component: mys
    }
  ]
})
