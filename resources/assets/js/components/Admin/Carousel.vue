<template>
  <div>
    <el-dialog
      title="添加轮播"
      :visible.sync="addDialogVisible"
      width="30%"
      center>
      <el-form :model="carousel">
        <el-form-item label="轮播配文" label-width="70px">
          <el-input v-model="carousel.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片地址" label-width="70px">
          <el-input v-model="carousel.img" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="跳转链接" label-width="70px">
          <el-input v-model="carousel.url" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCarousel()">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="修改轮播"
      :visible.sync="editDialogVisible"
      width="30%"
      center>
      <el-form :model="editCarousel">
        <el-form-item label="轮播配文" label-width="70px">
          <el-input v-model="editCarousel.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片地址" label-width="70px">
          <el-input v-model="editCarousel.img" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="跳转链接" label-width="70px">
          <el-input v-model="editCarousel.url" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="eidtDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateCarousel()">确 定</el-button>
      </span>
    </el-dialog>
    <el-form :inline="true" style="margin-top:15px;">
        <el-form-item>
            <el-input  placeholder="请输入轮播名称" v-model="search"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" icon="search" @click="searchCarousel()">查询</el-button>
        </el-form-item>
        <el-form-item>
            <el-button type="success" icon="el-icon-plus" @click="addDialogVisible = true">添加</el-button>
        </el-form-item>
        <el-form-item style="float:right">
            <el-button type="primary" @click="exportCarousel()">导出</el-button>
        </el-form-item>
    </el-form>
    <el-table
        :data="carouselList"
        stripe style="width: 100%"
        >
       <el-table-column 
        type="selection"
        width="55">
        </el-table-column>
        <el-table-column
        prop="id"
        label="编号">
        </el-table-column>
        <el-table-column
        label="轮播名称"
        prop="title"
        >
        </el-table-column>
        <el-table-column
        prop="img"
        label="轮播图" >
        <template slot-scope="scope">
            <span class="el-dropdown-link userinfo-inner"><img :src="scope.row.img" style="width:95px;margin-top:5px;"/></span>
        </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="small"
              icon="el-icon-search"
              circle
              @click="openUrl(scope.row)"></el-button>
            <el-button
              size="small"
              type="danger"
              icon="el-icon-delete"
              circle
              @click="delCarousel(scope.$index,scope.row)"></el-button>
            <el-button type="primary" icon="el-icon-edit" circle @click="editCarouselModel(scope.$index,scope.row);"></el-button>
            <el-button type="success" icon="el-icon-caret-top" @click="updateTop(scope.$index,scope.row)" circle></el-button>
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
        carouselList: [],
        search:"",
        currentPage: 1,
        pageSize: 10,
        total:0,
        addDialogVisible:false,
        editDialogVisible:false,
        operationIndex:0,
        carousel: {
          id:0,
          title: '',
          img: '',
          url: '',
          status:0,
          top:0
        },
        editCarousel:{
          id:0,
          title: '',
          img: '',
          url: '',
        },
      }
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.getUser(this.currentPage,val); 
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.getUser(val,this.pageSize); 
      },
      openUrl(row){
        window.open(row.url);
      },
      editCarouselModel(index,row){
        this.editCarousel.id=row.id;
        this.editDialogVisible = true;
        this.editCarousel.title=row.title;
        this.editCarousel.img=row.img;
        this.editCarousel.url=row.url;
        this.operationIndex=index;
      },
      updateCarousel(){
        var vue=this;
        axios.post('admin/updateCarousel',{
          'carousel':vue.editCarousel
        }).then(function(response){
          vue.editDialogVisible = false;
          if(response.data.code==1){
            vue.$message({
                type:"success",
                message: response.data.msg,
            });
            var carousel=JSON.parse(JSON.stringify(vue.editCarousel));
            vue.carouselList.splice(vue.operationIndex,1,carousel);
          }else{
            vue.$message({
                type:"error",
                message: response.data.msg,
            });
          }
        })
      },
      addCarousel(){
        var vue=this;
        axios.post('admin/addCarousel',{
          'carousel':vue.carousel
        }).then(function(response){
          vue.addDialogVisible = false;
          if(response.data.code==1){
            vue.$message({
                type:"success",
                message: response.data.msg,
            });
            vue.carousel.id=response.data.result;
            var carousel=JSON.parse(JSON.stringify(vue.carousel));
            vue.carouselList.push(carousel);
            vue.total++;
          }else{
            vue.$message({
                type:"error",
                message: response.data.msg,
            });
          }
        })
      },
      updateTop(index,row){
        var vue=this;
        axios.post('admin/updateTop',{
          'id':row.id,
          'index':index
        }).then(function(response){
          if(response.data.code==1){
            vue.$message({
                type:"success",
                message: response.data.msg,
            });
            if(index==0){

            }else{
              var carousel=vue.carouselList[index-1];
              vue.carouselList.splice(index-1,1,vue.carouselList[index]);
              vue.carouselList.splice(index,1,carousel);
            }
          }else{
            vue.$message({
                type:"error",
                message: response.data.msg,
            });
          }
        });        
      },
      searchCarousel(){
        var vue=this;
        axios.post('admin/searchCarousel',{
          'search':vue.search
        }).then(function(response){
          if(response.data.code==1){
            vue.carouselList=response.data.result.result;
            vue.total=response.data.result.count;
            vue.$message({
                type:"success",
                message: response.data.msg,
            });
          }else{
            vue.$message({
                type:"error",
                message: response.data.msg,
            });
          }
        });      
      },
      exportCarousel(){
        window.location.href="/admin/exportCarousel";
      },
      delCarousel(index,row){
        var vue=this;
         this.$confirm('确定删除吗?', '提示', {
            type: 'warning'
              }).then(() => {    
              this.$nextTick(function () {
                axios.post('admin/delCarousel',{
                  'id':row.id
                }).then(function(response){
                  if(response.data.code==1){
                    vue.$message({
                        type:"success",
                        message: response.data.msg,
                    });
                    vue.carouselList.splice(index,1);
                    vue.total--;
                  }else{
                    vue.$message({
                        type:"error",
                        message: response.data.msg,
                    });
                  }
                })
              })
            }).catch(() => {
        });   
      }
    },
    mounted: function() {
      var vue=this; 
      this.$nextTick(function () {
        axios.post('admin/getCarousel', {
        })
        .then(function (response) {
          vue.carouselList=response.data.result.result;
          vue.total=response.data.result.count;
        })
        .catch(function (response) {

        });
      })
    },
  }
</script>
<style scoped>
.block{
  padding-top: 10px;
  text-align: center;
}
</style>