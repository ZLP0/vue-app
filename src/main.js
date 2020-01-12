// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//菜单图标库
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI, {size: 'mini'});

Vue.config.productionTip = false;


const asyncRouterMap = [
  {
    path: '/',
    name:'',
    component: require('./layout/layout.vue'),
    redirect: '/'
  }
]
router.addRoutes(asyncRouterMap);

// 路由拦截
router.beforeEach((to, from, next) => {
  console.log("1111")
  next();
/*  if (to.path === '/') {
    next('/login')
  }else {
    next();
  }*/




})



new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})

