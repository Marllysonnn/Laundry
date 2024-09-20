import { createRouter, createWebHistory } from 'vue-router';
import Login_Register from '../pages/Login_Register.vue';
import HomePage from '../pages/HomePage.vue';
import DashboardAdm from '../pages ADM/DashboardAdm.vue';
import CustomerPage from '../pages ADM/Customer.vue';

const routes = [
  { path: '/', component: Login_Register },
  { path: '/homepage', component: HomePage },
  { path: '/dashboard_adm', component: DashboardAdm},
  { path: '/Customer_adm', component: CustomerPage},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
