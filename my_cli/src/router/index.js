import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import OrderHistory from '../components/OrderHistory.vue';

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
    path: '/bussinessList',
    name: 'bussinessList', //商家列表界面
    component: () => import('@/views/BussinessListView.vue')
  },
  {
    path: '/order-history',
    name: 'OrderHistory',
    component: OrderHistory,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
