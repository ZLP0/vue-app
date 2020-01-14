// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from "axios";
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//菜单图标库
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI, {size: 'mini'});

Vue.config.productionTip = false;
Vue.prototype.$axios = axios



const asyncRouterMap = [
  {
    path: '/',
    name:'',
    component: require('./layout/layout.vue'),
    redirect: '/'
  }
]
router.addRoutes(asyncRouterMap);





new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: {App},
  template: '<App/>'
})

