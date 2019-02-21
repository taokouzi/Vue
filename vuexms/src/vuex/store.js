// 引入vue
import Vue from 'vue'
import Vuex from 'vuex'

// 注册vuex
Vue.use(Vuex)

// 状态
const state = {
    userinfo: JSON.parse( window.localStorage.getItem( 'userinfo' ) ),
    userlist: []
}

// mutations 主要用来操作state
const mutations = {
    // 保存用户数据
    SAVE_USERINFO (state, data) 
    {
        // 先把数据存入本地存储
        window.localStorage.setItem( 'userinfo', JSON.stringify(data) )
        
        // 再更新数据
        state.userinfo = data
    },

    // 获取全局的用户数据
    GET_USERLIST (state, userlist)
    {
        console.log('00000000',userlist.id)
        state.userlist = userlist
    }
}

// 定义actions异步的，主要是commit mutations来改变状态
const actions = {
    GET_USERLIST_ACTIONS({ commit },data) 
    {
        console.log('commit')
        // 模拟数据接口 返回1
        var res = { code: 1 }

        if( res.code == 1 ) {
            
            commit('GET_USERLIST',data)
        }
    }
}


// 创建仓库
export default new Vuex.Store({
    state,
    mutations,
    actions
})