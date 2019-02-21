import Vue from 'vue'
import VueRouter from 'vue-router'	//需要命令安装路由模块  npm install vue-router --save-dev
import VueResource from 'vue-resource'	//需要命令安装http模块  npm install vue-resource --save-dev

import App from './App'
import Home from './components/Home'
import HelloWorld from './components/HelloWorld'

Vue.config.productionTip = false


// 使用路由
Vue.use(VueRouter)

// 使用http接口请求
Vue.use(VueResource)


// 配置路由
const router = new VueRouter({
	routes:[
		{path: "/", component: Home},
		{path: "./hello", component: HelloWorld }
	],
	mode:"history"
})


new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})


/*router.beforeEach((to, from, next) => {
  if (to.matched.length ===0) {   //如果未匹配到路由   
	console.log(1)                                  
    from.name ? next({ name:from.name }) : next('/');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
	console.log(2)
    next();                                                                            //如果匹配到正确跳转
  }
});

export default router*/