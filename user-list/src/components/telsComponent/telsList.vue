<!--------用户电话号码列表组件-------->
<template>
    <div class="list">
        <ul class="list-ul" ref='listUser'>
            <li v-for="(item,index) in userData" :key='index'>
                <p :class="item.in">{{ item.in }}</p>
                <ul>
                    <li v-for="(tel,index) in item.users" :key="index" @click='showTel(tel.tel)'>{{ tel.name }} - {{ tel.tel }}</li>
                </ul>
            </li>
        </ul>

    </div>    
</template>

<script>
    export default {
        data(){
            return {
                
            };
        },
        props: ['user-data'],
        methods:{
            showTel(tel){
                this.$store.commit('changeTel',tel)
                var myAlert = document.getElementById('tels').querySelector('#alert');

                this.$emit('fnBindTel',tel);

                myAlert.style.display = 'flex'
            }
        }
    }
</script>

<style scope>

.list-ul{
  position: relative;
  top: 80px;
}
.list-ul li{
  line-height: 50px;
}
.list-ul li p{
  background: #ddd;
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;
}
.list-ul ul li{padding-left:10px;}

</style>