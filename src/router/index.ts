import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Pantalla from '../views/Pantalla.vue'
import RestLinea from '../views/Rest.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'LOGIN',
    component: Login
  },
  {
    path: '/register',
    name: 'REGISTER',
    component: Register
  },
  {
    path: '/pantalla',
    name: 'PANTALLA',
    component: Pantalla
  },
  {
    path: '/rest',
    name: 'REST',
    component: RestLinea
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
