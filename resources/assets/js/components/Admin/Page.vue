<template>
    <div>
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
      <el-table
          :data="videoList"
          style="width: 100%">
          <el-table-column
            label="编号"
            width="180">
            <template scope="scope">
              <el-icon name="time"></el-icon>
              <span style="margin-left: 10px">{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="发起人"
            width="180"  prop="nick_name">
          </el-table-column>
            <el-table-column label="标题" prop="title" width="180">
            
          </el-table-column>
            <el-table-column label="开始时间" prop="start_time" width="180">
            
          </el-table-column>
            <el-table-column label="结束时间" prop="end_time" width="180">
            
          </el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <!-- <el-button
                size="small"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
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
  import { XButton } from 'vux'
  export default {
    data() {
      return {
        videoList: []
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
              for(var i=0;i<response.data.result.length;i++){
                response.data.result[i].end_time=getLocalTime(response.data.result[i].end_time);
                response.data.result[i].start_time=getLocalTime(response.data.result[i].start_time);
              }
              vue.videoList=response.data.result;
              console.log(response.data);
            })
            .catch(function (response) {
                console.log(response);
            });
          })
        }).catch(() => {
        });   
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      seePage(index,row){
        window.open(window.location.origin+"/home#/page/"+row.id);
      }
    },
    mounted: function() {
      var vue=this; 
      this.$nextTick(function () {
        axios.post('/admin/getPage', {
        })
        .then(function (response) {
          for(var i=0;i<response.data.result.length;i++){
            response.data.result[i].end_time=getLocalTime(response.data.result[i].end_time);
            response.data.result[i].start_time=getLocalTime(response.data.result[i].start_time);
          }
            vue.videoList=response.data.result;
        })
        .catch(function (response) {
            console.log(response);
        });
      })
    },
    components: {
      XButton,
    },
  }
</script>
<style>
.block{
  padding-top: 10px;
  text-align: center;
}
</style>

