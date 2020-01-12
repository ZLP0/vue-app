import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import login from '@/page/login'
import layout from '@/layout/layout'
import  table  from '@/page/table'

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: login
    },
    {
      path: '/',
      name: 'home',
      component: layout,
      children:[
        {path:'login',name:'登录',component:login},
        {path:'table',name:'表格',component:table},
      ]
    }
  ]
})
