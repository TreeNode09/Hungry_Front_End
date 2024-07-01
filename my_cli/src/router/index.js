import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '@/views/WelcomeView.vue';
import OrderHistory from '../components/OrderHistory.vue';
import AddressManagement from '../views/AddressManagement.vue';
import ShopManagement from '../views/ShopManagement.vue';


const routes = [
  {
    path: '/',
    name: 'welcome',  //初始界面
    component: Welcome,
  },
  {
    path: '/login',
    name: 'login', //登录页面
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register', //注册页面
    component: () => import('@/views/RegisterView.vue')
  },
  {
    path: '/home',
    name: 'Home', //主菜单
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/search',
    name: 'search', //搜索界面
    component: () => import('@/views/SearchView.vue')
  },
  {
    path: '/order',
    name: 'order', //点餐界面
    component: () => import('@/views/OrderView.vue'),
    props: (route) => ({ business: route.query.business })
  },
  {
    path: '/category',
    name: 'category', //商家列表界面
    component: () => import('@/views/CategoryView.vue')
  },
  {
    path: '/pay',
    name: 'pay', //支付界面
    component: () => import('@/views/PayView.vue')
  },
  {
    path: '/order-history',
    name: 'OrderHistory',
    component: OrderHistory,
  },
    {
    path: '/address-management',
    name: 'AddressManagement',
    component: AddressManagement,
  },
  {
    path: '/shop-management',
    name: 'ShopManagement',
    component: ShopManagement,
  },
    {
    path: '/businessManagement',
    name: 'businessManagement',
    component: () => import('@/views/BusinessManagementView.vue')
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
