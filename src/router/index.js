import { createRouter, createWebHashHistory } from 'vue-router'

const publicRoutes = [
  {
    path: '/login', // 登录页面
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/user', // 用户页面
    name: 'user',
    component: () => import('../views/users/user')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
