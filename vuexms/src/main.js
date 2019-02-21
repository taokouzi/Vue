// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// ElementUI插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import axios from 'axios'
Vue.prototype.$http = axios

import VueRouter from 'vue-router'
Vue.use(VueRouter)



// 引入组件
import login from './components/login'
import index from './components/index'
import userList from './components/userList'
import addAdmin from './components/addAdmin'
import editPassword from './components/editPassword'

import store from './vuex/store'

Vue.config.productionTip = false




var router =  new VueRouter({
  routes: [
    { path: '/login', component: login },
    { path: '/', component: index, redirect: '/userList',  children:[
      { path: '/userList', component: userList },
      { path: '/addAdmin', component: addAdmin },
      { path: '/editPassword', component: editPassword }
    ] }
  ],
  mode: 'history'
})







/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
