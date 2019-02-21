<!--------------电话簿组件入口-------------->
<template>
  <div id="tels" class="clear">

      <my-header ct-title='通讯录'>
        <button @click="backBtn" class="left" slot='back'>返回</button>
        <button @click='homeBtn' class="right" slot='home'>主页</button>
      </my-header>
      
      <tel-list :user-data="userData" @fnBindTel="bindTelBack($event)"></tel-list>
      <tel-btn :tel-btn="telBtn"></tel-btn>

      <my-alert ct-name='呼叫' :tel='tel'>
        <div class="btn" slot='alert'>
            <button>确定</button>
            <button @click="close">取消</button>
        </div>
      </my-alert>

  </div>
</template>

<script>

import telsList from './telsComponent/telsList'
import telsBtn from './telsComponent/telsBtn'
import myAlert from './telsComponent/alert'


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
  name: 'tels',
  data(){
    return {
      msg:'测试',
      userData:userData,
      tel:0
    }
  },
  methods:{
    bindTelBack($event){
      // console.log( $event )
      this.tel = $event;
    },
    filterBtn( data ){
      var telBtns = [];
      for( var i in data ){
        if( data[i].in )
        {
          telBtns.push(data[i].in)
        }
      }
      return telBtns;
    },
    homeBtn(){
      this.$router.push('/tabar')
    },
    backBtn(){
      this.$router.go(-1)
    },
    close(){
      var myAlert = document.getElementById('tels').querySelector('#alert');
      myAlert.style.display = 'none'
    }
  },
  computed:{
    telBtn()
    {
      return this.filterBtn( this.userData )
    }
  },
  components:{
    'my-header':{
      template: `<div class='tels'>
                  <slot name='back'></slot>
                  {{ ctTitle }}
                  <slot name='home'></slot>
                </div>`,
      props: {
        'ctTitle': {
          type: String,
          default: '默认值'
        }
      }
    },
    'tel-list': telsList,
    "tel-btn": telsBtn,
    'my-alert': myAlert
  }
}


</script>

<style scope>
 *{margin:0;padding: 0;color: #333;}

.tels{
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-align: center;
  background: #666;
  position: fixed;
  z-index: 9;
  top: 40px;
}
button{
  height: 40px;
  padding:0 10px; 
}

</style>
