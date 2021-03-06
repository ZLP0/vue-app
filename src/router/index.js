import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from '@/page/login'
import layout from '@/layout/layout'
import table from '@/page/table'
import echar from '@/page/echar'

import register from '@/page/register'
//修改用户信息
import userInfo from '@/page/user/userInfo'
// 富文本 页面
import edit from '@/page/edit'
import  homePay from '@/page/homePay'

const routes = [
  {
    path: '/login',
    name: '登录',
    component: login
  },
  {
    path: '/register',
    name: '注册',
    component: register
  },
  {
    path: '/',
    name: 'home',
    component: layout,
    children: [
      {path: 'login', name: '登录', component: login},
      {path: 'table', name: '表格', component: table},
      {path: 'echar', name: 'echar', component: echar},
      {path: 'userInfo', name: '用户信息', component: userInfo},
      {path: 'edit', name: '富文本', component: edit},
      {path: 'homePay', name: '支付', component: homePay},


    ]
  }
]


// 创建router对路由进行管理，由构造函数 new Router()创建，接收routes参数
const router = new Router({
  routes: routes // 简写：routes
});

export default router

// 路由拦截
router.beforeEach((to, from, next) => {


  //localStorage (持久化到本地)
  //sessionStorage （会话级别  注：同一个浏览器 多个标签页 sessionStorage不共享）
  let userinfo = sessionStorage.getItem("userInfo");

  console.log('用户信息：' + userinfo)

  if (to.path != '/login' && to.path != '/register') {
    //用户 信息为空
    if (!userinfo) {
      //跳转登录页
      next('/login')
    } else {
      //有用户信息 直接放行
      next();
    }
  } else {
    next();
  }

})

