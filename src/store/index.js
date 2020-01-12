import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import menu from './menu'
import  page from './page'



export default new Vuex.Store({
  modules: {
    menu,page
  }
});
