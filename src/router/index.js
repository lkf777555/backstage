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
    component: () => import('../views/users/user'),
    children: [
      {
        path: '/profile', // 登录页面
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

router.beforeEach((to, from, next) => {
  // 访问的路径在白名单
  if (localStorage.getItem('token')) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
