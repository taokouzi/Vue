<template>
  <div id="app">
    <mt-header title='标题过SD敢达在不哈哈哈哈哈哈哈哈哈哈哈哈或'>
      <!-- <router-link to='/' slot="left"> -->
        <mt-button icon='back'>返回</mt-button>
      <!-- </router-link> -->
      <mt-button icon='more' slot="right"></mt-button>
    </mt-header>  

    <mt-index-list>
      <mt-index-section v-for="(item,index) in userData" :key="index"  :index='item.in'>
          <mt-cell @click.native="telAlert(user.tel)" v-for="(user,index) in item.users" :key="index" :title="user.name + '-' + user.tel"></mt-cell>
      </mt-index-section>
    </mt-index-list>
    
    

  </div>
</template>

<script>

import { MessageBox } from 'mint-ui';

var userData = [
                {'in':'A','users':[
                  {
                    'name':'a1',
                    'tel':'18280078419'
                  },
                  {
                    'name':'a2',
                    'tel':'18200000000'
                  },
                  {
                    'name':'a3',
                    'tel':'18200000002'
                  },
                  {
                    'name':'a4',
                    'tel':'18280078419'
                  },
                  {
                    'name':'a5',
                    'tel':'18200000000'
                  },
                  {
                    'name':'a6',
                    'tel':'18200000002'
                  }
                ]},
                {'in':'B','users':[
                  {
                    'name':'b1',
                    'tel':'18280078419'
                  },
                  {
                    'name':'b2',
                    'tel':'18200000000'
                  },
                  {
                    'name':'b3',
                    'tel':'18200000002'
                  },
                  {
                    'name':'b4',
                    'tel':'18280078419'
                  },
                  {
                    'name':'b5',
                    'tel':'18200000000'
                  },
                  {
                    'name':'b6',
                    'tel':'18200000002'
                  }
                ]},
                {'in':'C','users':[
                  {
                    'name':'c1',
                    'tel':'18280078419'
                  },
                  {
                    'name':'c2',
                    'tel':'18200000000'
                  },
                  {
                    'name':'c3',
                    'tel':'18200000002'
                  },
                  {
                    'name':'c4',
                    'tel':'18200000000'
                  },
                  {
                    'name':'c5',
                    'tel':'18200000002'
                  }
                ]},
                {'in':'D','users':[
                  {
                    'name':'d1',
                    'tel':'18280078419'
                  },
                  {
                    'name':'d2',
                    'tel':'18200000000'
                  },
                  {
                    'name':'d3',
                    'tel':'18200000002'
                  },
                  {
                    'name':'d4',
                    'tel':'18280078419'
                  },
                  {
                    'name':'d5',
                    'tel':'18200000000'
                  },
                  {
                    'name':'d6',
                    'tel':'18200000002'
                  }
                ]}
              ]


export default {
  name: 'App',
  data(){
    return{
      userData: userData
    }
  },
  methods:{
    telAlert(tel){
      MessageBox({
        title: '呼叫',
        message: tel,
        showCancelButton: true
      }).then(function(res){
        if( res == 'confirm' ){
          console.log('确定')
        }else{
          console.log('取消')
        }
      })
    }
  }
}
</script>

<style>
  html,body{
    margin: 0;
    padding: 0;
  }
</style>
