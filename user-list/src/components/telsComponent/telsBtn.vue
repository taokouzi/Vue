<!--------右侧导航字母组件-------->
<template>
    <ul class="list-right">
        <li @touchstart='toScroll' v-for="(item,index) in telBtn" :key="index">{{ item }}</li>
      </ul>
</template>

<script>
    export default{
        name: 'list-right',
        props:['tel-btn'],
        methods: {
            toScroll(ev){
                var aP = document.getElementById('tels').querySelectorAll('p');
                for( var i in aP )
                {
                    if( aP[i].innerHTML == ev.target.innerHTML )
                    {
                        // document.body.scrollTop = aP[i].offsetTop;
                        document.documentElement.scrollTop = aP[i].offsetTop;
                    }
                }
            }
        }
    }
</script>

<style scope>
.list-right{
    width: 30px;
    text-align: center;
    position: fixed;
    right:10px;
    top:40%;
    list-style: none;
    z-index: 9;
}
.list-right li{
    line-height: 30px;
    height: 30px;
}
</style>