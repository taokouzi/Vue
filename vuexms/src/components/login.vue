<template>
  <div class="login">
    <!-- 登录表单 -->
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="0" class="demo-ruleForm">
      
      <h1 class="title"> <i class="el-icon-menu"></i> VUEXms-登录</h1>

      <el-form-item label="" prop="admin">
        <el-input type="text" v-model="loginForm.admin" autocomplete="off" placeholder="账号">></el-input>
      </el-form-item>

      <el-form-item label="" prop="pass">
        <el-input type="password" v-model="loginForm.pass" autocomplete="off" placeholder="密码"></el-input>
      </el-form-item>

     

      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>
export default {
    data() {
      return {
        // 登录表单的数据
        loginForm: {
          admin: '',
          pass: ''
        },

        // 验证规则
        rules: {
          admin: [
            { required: true, message: '请输入账号', trigger: 'blur' },  //非空验证
            { min: 5, max: 18, message: '长度在5-18位之间', trigger: 'blur' } //长度验证
          ],
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 5, max: 18, message: '长度在5-18位之间', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) 
          {
            // alert('表单验证成功');
            // 收集用户名和密码 请求接口
            // console.log( this.loginForm.admin, this.loginForm.pass )
            /*var self = this;
            this.$http.post('/api/checklogin',{
              pasams:{
                username: self.loginForm.admin,
                password: self.loginForm.pass
              }
            }).then(res=>{
              console.log( res )
            })*/

            // 假设接口请求成功
            var res = { code : 1 }
            if( res.code == 1){

              
              // 模拟数据
              var users = {
                id: 1,
                username: 'admin',
                realname: '讨口子',
                idType: '5137231992300146265'
              }
              // 把当前登录用户数据存入vuex中的state
              this.$store.commit('SAVE_USERINFO', users)


              this.$message({
                message: '恭喜你，登录成功',
                type: 'success'
              });

              // 登录成功，跳转到后台首页
              this.$router.push('/')
            }

          } 
          else 
          {
            // console.log('表单验证失败');
            this.$message.error('登录失败，请检查用户名或密码');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
.login{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .el-form{
    width: 400px;
    border:1px solid #ccc;
    border-radius: 4px;
    padding: 10px 20px;
  }
  .title{
    font-size: 20px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    padding: 30px 0;
    }
    .el-form-item__content{
      text-align: center;
    }
</style>


