import { createRouter, createWebHistory } from 'vue-router'; // Use as funções do Vue Router 4
import Login_Register from '../pages/Login_Register.vue';
import HomePage from '../pages/HomePage.vue';

const routes = [
  { path: '/', component: Login_Register },
  { path: '/homepage', component: HomePage },
];

const router = createRouter({
  history: createWebHistory(), // Use o history mode
  routes,
});

export default router;
