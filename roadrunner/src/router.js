import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Confirmation from './views/confirmation.vue'
import Admin from './views/Admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      // route level code-splitting
      // this generates a separate chunk (confirmation.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Confirmation,
      props: (route) => {
        const carID = Number.parseInt(route.params.carID)
        return {carID}
      },
    }
  ]
})
