// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import axios from 'axios'

// 引入routes.js
import {routes} from './routes'

Vue.config.productionTip = false

Vue.use(vueRouter)


Vue.prototype.$ajax = axios



const router = new vueRouter({
	routes,
	mode:'history',
	scrollBehavior:function(to, from, savedPosition){	//滚动行为	
		// return 期望滚动到哪个的位置
		// return { x:0, y:100 }
		// return { selector: '.btn' }
		/*if( savedPosition )
		{
			return savedPosition;
		}
		else{
			return { x:0, y:100 }
		}*/


		return new Promise((resolve, reject) => {

		    setTimeout(() => {
		      resolve({ x: 0, y: 200 })
		    }, 500)
		 })
	}
})


// 全局守卫（例如：未登录状态点击任何页面按钮都提示先去登录）
// router.beforeEach(function( to, from, next ){
// 	if( to.path == '/login' || to.path == '/register' ){
// 		next();
// 	}
// 	else{
// 		alert('请先登录（全局守卫）')
// 		next('/login');
// 	}
// })




/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
