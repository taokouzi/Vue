<template>
  <div id="list">


    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>用户账号列表</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作</el-button>
        </div>
        <div  class="text item">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="username" label="用户账号" width="180"> </el-table-column>
                <el-table-column prop="realname" label="名称" width="180"> </el-table-column>
                <el-table-column prop="idType" label="证件号"> </el-table-column>

                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleEdit(scope.row.id)" type="text" size="small">修改</el-button>
                        <el-button @click="handleDel(scope.row.id)" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </el-card>

    <!-- {{ fnstart }} -->

  </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
          id: 1,
          username: 'admin01',
          realname: '王小虎',
          idType: '上海市普陀区金沙江路 1518 弄'
        }, 
        {
          id: 2,
          username: 'admin02',
          realname: '王小虎',
          idType: '上海市普陀区金沙江路 1517 弄'
        }, 
        {
          id: 3,
          username: 'admin03',
          realname: '王小虎',
          idType: '上海市普陀区金沙江路 1519 弄'
        }, 
        {
          id: 4,
          username: 'admin04',
          realname: '王小虎',
          idType: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods:{
        // 修改
        handleEdit(id){
            console.log( id )
            this.$message({
                message: '你修改个jj',
                type: 'warning'
            });
        },
        // 删除
        handleDel(id){
            console.log( id )
            this.$message({
                message: '你删除个毛',
                type: 'warning'
            });
        }
    },
    computed:{
        fnstart(){
            // console.log('开始')
            this.$store.dispatch('GET_USERLIST_ACTIONS',{ id: 9 })
        }
    },
    mounted(){
        this.fnstart;
    }
  }
</script>

<style>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

</style>
