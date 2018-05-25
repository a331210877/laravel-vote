<template>
    <div>
      <el-form :inline="true" style="margin-top:15px;">
        <el-form-item>
            <el-input  placeholder="请输入活动名称" v-model="search"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" icon="search" @click="searchPage()">查询</el-button>
        </el-form-item>
        <el-form-item style="float:right">
            <el-button type="primary" @click="exportPage()">导出</el-button>
        </el-form-item>
      </el-form>
      <el-table
          :data="pageList"
          style="width: 100%">
          <el-table-column 
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="编号"
            prop="id"
            >
          </el-table-column>
          <el-table-column
            label="发起人"
            prop="nick_name">
          </el-table-column>
            <el-table-column label="标题" prop="title">
            
          </el-table-column>
            <el-table-column label="开始时间" prop="start_time">
            
          </el-table-column>
            <el-table-column label="结束时间" prop="end_time">
            
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="small"
                type="danger"
                @click="deletePage(scope.$index, scope.row)">删除</el-button>
              <el-button
                size="small"
                type="primary"
                @click="seePage(scope.$index, scope.row)">浏览</el-button>
            </template>
          </el-table-column>
      </el-table>
      <div class="block">
          <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
          </el-pagination>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        pageList: [],
        currentPage: 1,
        pageSize: 10,
        total:0,
        search:""    
      }
    },
    methods: {
      deletePage(index, row) {
        var vue=this;
        this.$confirm('确定删除吗?', '提示', {
        type: 'daring'
          }).then(() => {    
          this.$nextTick(function () {
            axios.post('/admin/delPage', {
              id : row.id
            })
            .then(function (response) {
              if(response.data.code==1){
                vue.$message({
                    type:"success",
                    message: response.data.msg,
                });
                vue.pageList.splice(index,1);
                vue.total--;
              }else{
                vue.$message({
                    type:"error",
                    message: response.data.msg,
                });
              }
              
            })
            .catch(function (response) {
                console.log(response);
            });
          })
        }).catch(() => {
        });   
      },
      searchPage(){
        var vue=this;
        axios.post('admin/searchPage',{
          'search':vue.search
        }).then(function(response){
          console.log(response.data);
          vue.pageList=response.data.result.result;
          vue.total=response.data.result.count;
        });
      },
      exportPage(){
        window.location.href="/admin/exportPage";
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      seePage(index,row){
        window.open(window.location.origin+"/home#/page/"+row.id);
      },
      handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          this.getUser(this.currentPage,val); 
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.getUser(val,this.pageSize); 
      },
    },
    mounted: function() {
      var vue=this; 
      this.$nextTick(function () {
        axios.post('/admin/getPage', {
        })
        .then(function (response) {
          for(var i=0;i<response.data.result.result.length;i++){
            response.data.result.result[i].end_time=getLocalTime(response.data.result.result[i].end_time);
            response.data.result.result[i].start_time=getLocalTime(response.data.result.result[i].start_time);
          }
            vue.pageList=response.data.result.result;
            vue.total=response.data.result.count;
        })
        .catch(function (response) {
            console.log(response);
        });
      })
    },
  }
</script>
<style>
.block{
  padding-top: 10px;
  text-align: center;
}
</style>

