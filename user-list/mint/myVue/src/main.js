// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'



// mint-ui 插件（饿了么团队开发）
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
