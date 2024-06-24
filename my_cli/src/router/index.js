import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/SearchView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
