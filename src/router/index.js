import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/pages/Home'),
      meta: {
        title: '首页',
        keepAlive: true
      }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
