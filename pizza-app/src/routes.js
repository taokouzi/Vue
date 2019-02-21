import home from './components/home'
import menu from './components/menu'
import admin from './components/admin'
import about from './components/about/about'
import login from './components/login'
import register from './components/register'
import guard from './components/guard'


// about 二级路由
import history from './components/about/history'
import contact from './components/about/contact'
import order from './components/about/order'
import delivery from './components/about/delivery'


export const routes = [
		// 组件复用
		{ path:'/', name:'homeLink', components:{
			default:home,
			ord:order,
			dlv:delivery,
			his:history
		} },
		{ path:'/menu', name:'menuLink', component: menu, props:{ name: '刘杰' } },
		{ path:'/admin', name:'adminLink', component: admin, beforeEnter:function(to, from, next){
			alert('只有登录后才能查看该页面（路由独享守卫）')
			next('/login');
		} },
		{ path:'/about', name:'aboutLink', component: about, redirect:'/history', children:[
				{path:'/contact', name:'contactLink', component: contact},
				{path:'/history', name:'historyLink', component: history},
				{path:'/delivery', name:'deliveryLink', component: delivery},
				{path:'/order', name:'orderLink', component: order}
			] 
		},
		{ path:'/guard', component: guard },
		{ path:'/login', name:'loginLink', component: login },
		{ path:'/register', name:'registerLink', component: register},
		{ path:'*', redirect:'/'}
	]


