<template>
    <div >
    <el-form :inline="true" style="margin-top:15px;">
        <el-form-item>
            <el-input  placeholder="请输入....."></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" icon="search">查询</el-button>
        </el-form-item>
        <el-form-item style="float:right">
            <el-button type="primary">导出</el-button>
        </el-form-item>
    </el-form>
		<el-table :data="tableData" stripe style="width: 100%" @selection-change="selsChange">
            <el-table-column 
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            prop="id"
            label="编号">
            </el-table-column>
            <el-table-column
            label="头像"
            >
            <template scope="scope">
              <span class="el-dropdown-link userinfo-inner"><img :src="scope.row.headimgurl" style="width:45px;margin-top:5px;"/></span>
            </template>
            </el-table-column>
            <el-table-column
            prop="nick_name"
            label="国家">
            </el-table-column>
            <el-table-column
            prop="country"
            label="国家">
            </el-table-column>
            <el-table-column
            prop="province"
            label="省份">
            </el-table-column>
             <el-table-column
            prop="city"
            label="省份">
            </el-table-column>
            <el-table-column prop="edit" label="操作">
            <template scope="scope">
              <el-button v-if="scope.row.status==0" type="danger" size="mini" @click="handleChange(scope.$index, scope.row)">禁用</el-button>
              <el-button v-else-if="scope.row.status==1" type="success" size="mini" @click="handleChange(scope.$index, scope.row)">启用</el-button>
            </template>
            </el-table-column>
      </el-table>
      <!--批量删除 与 分页-->
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
import Axios from 'axios'
   export default {
    data() {
      return {
        tableData: [],
        currentPage: 1,
        pageSize: 10,
        total:0,
        sels: [],
      }
    },
     methods: {
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleChange(index, row) {
          if(row.status==0){
            this.disableUser(row.id,row);
          }else{
            this.enableUser(row.id,row);
          }
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          this.getUser(this.currentPage,val); 
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.getUser(val,this.pageSize); 
        },
        //复选框选择变化事件
        selsChange: function (sels) {
          this.sels = sels;
        },
        enableUser: function($id,$row){
          var vue=this;
            this.$confirm('确定启用吗?', '提示', {
              type: 'warning'
                }).then(() => {    
                  this.$nextTick(function () {
                    axios.post('admin/enableUser', {
                      'id': $id,
                    })
                    .then(function (response) {
                      if(response.data.code==1){
                            vue.$message({
                                type:"success",
                                message: response.data.msg,
                            });
                            $row.status=0;
                        }else{
                            vue.$message.error(response.data.msg);
                        }
                    })
                    .catch(function (response) {
                        console.log(response);
                    });
                  })
                }).catch(() => {
            });   
        },
        disableUser: function($id,$row){
          var vue=this;
          this.$confirm('确定禁用吗?', '提示', {
              type: 'warning'
                }).then(() => {      
                  this.$nextTick(function () {
                    axios.post('admin/disableUser', {
                      'id': $id,
                    })
                    .then(function (response) {
                      if(response.data.code==1){
                            vue.$message({
                                type:"success",
                                message: response.data.msg,
                            });
                            $row.status=1;
                        }else{
                            vue.$message.error(response.data.msg);
                        }
                    })
                    .catch(function (response) {
                        console.log(response);
                    });
                  })
                }).catch(() => {
            });     
        },
        getUser: function($currentPage,$pageSize) {
            var vue=this;
            this.$nextTick(function () {
                axios.post('admin/getUser', {
                  'currentPage': $currentPage,
                  'pageSize': $pageSize
                })
                .then(function (response) {
                   if(response.data.code==1){
                     window.location.href = '/login';
                   }
                   vue.tableData=response.data.res;
                   vue.total=response.data.userCount;
                })
                .catch(function (response) {
                    console.log(response);
                });
            })
        },
     },
     mounted: function(){
       this.getUser(1,10);
     }
    }
</script>

<style scoped>
.block{
  padding-top: 10px;
  text-align: center;
}
</style>
