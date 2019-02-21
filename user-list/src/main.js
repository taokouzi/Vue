// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Vuex from 'vuex'

import VueRouter from 'vue-router'

Vue.config.productionTip = false





// mint-ui 插件（饿了么团队开发）
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)





Vue.use(Vuex)
Vue.use(VueRouter)


import home from './components/home'
import tabar from './components/tabar'
import tels from './components/tels'

var router = new VueRouter({
  routes:[
    { path:'/', component: home },
    { path:'/tabar', component: tabar },
    { path: '/tels', component: tels }
  ],
  mode: 'history'
})


var store = new Vuex.Store({
  state:{
    count: 10,
    tel: 0
  },
  mutations:{
    changeTel (state,tel){
      state.tel = tel;
      // console.log( state.tel )
    },
    add: state=>{
      state.count ++;
    },
    remove: state=>{
      state.count --;
    }
  }
})



/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
