import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/login/login.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
