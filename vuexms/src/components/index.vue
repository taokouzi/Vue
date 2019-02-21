<template>
  <div class="index">
    <!-- <h1>后台首页</h1>
    {{ $store.state.userinfo }} -->
    <el-container style="height: 100%; border: 1px solid #eee">
      <!-- 左侧导航 -->
      <el-aside width="200px">
        <!-- default-active 默认激活 -->
        <el-menu :default-openeds="['1']" default-active="userList" background-color='#545c64' text-color='#fff' router>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>账号管理</template>
            <el-menu-item index="userList">账号列表</el-menu-item>
            <el-menu-item index="addAdmin">添加账号</el-menu-item>
            <el-menu-item index="editPassword">修改密码</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- 右侧列表 -->
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{ username2 }}</span>
        </el-header>
        
        <el-main>
          <!-- 视图出口 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

// 引入mapState辅助函数
import { mapState } from 'vuex'

export default {
    data() {
      return {
      }
    },
    computed: {
      username() {
        return this.$store.state.userinfo.realname
      },

      // 获取vuex仓库中 state对象中的数据
      ...mapState({
        userinfo: state=> state.userinfo,
        // username2: state=> state.userinfo.realname
        username2( state ){
          return state.userinfo.realname
        }
      })
    },
    // 组件守卫
    beforeRouteEnter( to, frome, next ){
      var userinfo = window.localStorage.getItem('userinfo');
      if( userinfo )
      {
        next()
      }
      else
      {
        next({ path: 'login' })
      }
    }
  };
</script>

<style scope>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #545c64;
  }
  .el-menu-item.is-active{
    background-color: #B3C0D1 !important;
    color: #333;
  }
  html,  body, #app, .index{
    height: 100%;
  }
</style>


