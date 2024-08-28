import { createRouter, createWebHistory } from 'vue-router';
import Login_Register from '../pages/Login_Register.vue';
import HomePage from '../pages/HomePage.vue';
import DashboardAdm from '../pages/DashboardAdm.vue';

const routes = [
  { path: '/', component: Login_Register },
  { path: '/homepage', component: HomePage },
  { path: '/dashboard_adm', component: DashboardAdm},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
