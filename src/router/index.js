import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    redirect: '/home',
  },

  {
    path: '/home',
    component: () => import('@/views/home'),
    name: 'Home',
    meta: { title: '每日一卡' },
  },

  {
    path: '/love',
    component: () => import('@/views/love'),
    name: 'Love',
    meta: { title: '爱情占卜' },
  },
  {
    path: '/divination',
    component: () => import('@/views/divination'),
    name: 'Divination',
    meta: { title: '抽三张' },
  },
  {
    path: '/chat',
    component: () => import('@/views/chat'),
    name: 'Chat',
    meta: { title: 'chat' },
  },
  {
    path: '/no-found',
    component: () => import('@/views/no-found'),
    name: 'NoFound',
    meta: { title: '未找到页面' },
  },

  { path: '*', redirect: '/no-found' },
]

const createRouter = () =>
  new Router({
    base: env.routerPath,
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
