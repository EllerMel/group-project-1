import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      component: () => import(/* webpackChunkName: "about" */ './views/confirmation.vue')
=======
      component: () => import(/* webpackChunkName: "confirmation" */ './views/confirmation.vue')
>>>>>>> a690d7087eb930945b14d04d9b64f2ad3e7547bd
    }
  ]
})
