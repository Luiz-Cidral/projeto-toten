import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BebidaView from '@/views/BebidaView.vue'
import SuccessView from '@/views/SuccessView.vue'



const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/extra',
      name: 'extra',
      component: () => import('../views/ExtraView.vue'),
    },

    {
      path: '/bebida',
      name: 'bebida',
      component: BebidaView,
    },

    {
      path: '/check',
      name: 'check', 
      component: () => import('../views/CheckView.vue')
    },
    {
  path: '/success',
  name: 'success',
  component: SuccessView
}

  ],
})

export default router
