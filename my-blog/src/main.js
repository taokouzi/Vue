// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import vueRouter from 'vue-router'
import axios from 'axios'


import showBlogs from './components/showBlogs'
import addBlog from './components/addBlog'
import singleBlog from './components/singleBlog'


Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(vueRouter)



const routes = [
  {path:'/',component:showBlogs},
  {path:'/add',component:addBlog},
  {path:'/blog/:id',component:singleBlog},
  { path:'*', redirect:'/'}
];

var router = new vueRouter({
  routes,
  mode:'history'
})


// 自定义过滤器
// 标题大写
Vue.filter('toUppercase',value=>{
  return value.toUpperCase()
})
// 省略字数
Vue.filter('snippet',value=>{
  return value.slice(0,100)+'...'
})



/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
