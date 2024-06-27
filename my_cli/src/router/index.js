import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home', //主菜单
    component: HomeView
  },
  {
    path: '/search',
    name: 'search', //搜索界面
    component: () => import('@/views/SearchView.vue')
  },
  {
    path: '/order',
    name: 'order', //点餐界面
    component: () => import('@/views/OrderView.vue')
  },
  {
    path: '/catagory',
    name: 'catagory', //商家列表界面
    component: () => import('@/views/CatagoryView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
