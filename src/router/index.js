import { createRouter, createWebHashHistory } from 'vue-router'

// 公有路由表
const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/user', // 用户模块
    name: 'user',
    component: () => import('../views/users/user'),
    children: [
      {
        path: '/profile', // 个人中心
        name: 'profile',
        component: () => import('../views/users/profile')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
