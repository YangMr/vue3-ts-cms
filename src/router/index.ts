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
    component: () => import('@/views/main/main.vue'),
    children: [
      {
        path: '/main/analysis/dashboard',
        name: 'dashboard',
        component: () => import('@/views/main/analysis/dashboard/dashboard.vue')
      },
      {
        path: '/main/analysis/overview',
        name: 'overview',
        component: () => import('@/views/main/analysis/overview/overview.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
