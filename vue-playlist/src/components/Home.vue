<template>
  <div id="home">

    <myHeader @msgChange="updateMsg($event)" :msg="msg"></myHeader>

    <users :usersA="usersArr"></users>
    
    <myFooter :msg="msg"></myFooter>

  </div>
</template>

<script>

import Header from './Header'
import Users from './Users'
import Footer from './Footer'

export default {
  name: 'home',
  data:function(){
    return {
      usersArr: [
          // {name:'哈哈哈1',position:'测试',show:false},
          // {name:'哈哈哈',position:'测试',show:false},
          // {name:'哈哈哈',position:'测试',show:false},
          // {name:'哈哈哈',position:'测试',show:false},
          // {name:'哈哈哈',position:'测试',show:false},
          // {name:'哈哈哈',position:'测试',show:false},
          // {name:'哈哈哈',position:'测试',show:false},
          // {name:'哈哈哈9',position:'测试',show:false},
        ],
      msg:'你吃饭了没？'
    };
  },
  methods:{
    updateMsg:function(res){
      console.log(res)
      this.msg = res;
    }
  },
  components:{ 
              'myHeader':Header,
              Users,
              'myFooter':Footer 
            },
  created:function(){
    this.$http.get('http://jsonplaceholder.typicode.com/users').then( function(res){
      console.log(res)
      this.usersArr = res.body;
    } )
  }
}
</script>

<style scoped>

</style>
