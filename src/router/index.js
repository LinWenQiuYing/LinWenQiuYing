import Vue from 'vue'
import Router from 'vue-router'

const Primary = () => import('@/views/primary/primary')
const Middle = () => import('@/views/middle/middle')

// 1.安装插件
Vue.use(Router)

// 2.创建路由对象
const routes = [
  {
    path: '',
    redirect: '/primary',
  },
  {
    path: '/primary',
    component: Primary,
  },
  {
    path: '/middle',
    component: Middle,
  },
]

// 3.创建路由实例
const router = new Router({
  routes,
  mode: 'history',
})

// 4.导出路由
export default router