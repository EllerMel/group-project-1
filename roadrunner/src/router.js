import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Confirmation from './views/confirmation.vue'

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
      path: '/confirmation',
      name: 'confirmation',
      // route level code-splitting
      // this generates a separate chunk (confirmation.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
<<<<<<< HEAD
      component: () => import(/* webpackChunkName: "confirmation" */ './views/confirmation.vue')
=======
      component: Confirmation,
      props: { carObject: Object }
>>>>>>> 95df15ac566715616ecd0af451ba19af7318f8af
    }
  ]
})
