import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/adminorder',
      name: 'order',
      component: () => import('../views/adminorder.vue')
    },
    {
      path: '/adminproduct',
      name: 'prodcut',
      component: () => import('../views/adminproduct.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/user.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/history.vue')
    }
  ]
})

export default router
