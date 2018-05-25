<template>
  <div class="wrap">
        <!-- <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <el-input v-model="filters.name" placeholder="请输入....."></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="search" >查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleAdd">新增</el-button>
                </el-form-item>
            </el-form>
        </el-col> -->
        <!-- 列表 -->
        <el-table 
          :data="tableData" 
          stripe 
          style="width: 100%;"
          @selection-change="selsChange" 
          :default-sort = "{prop: 'date', order: 'descending'}">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column sortable prop="id" label="编号"></el-table-column>
          <el-table-column sortable prop="name" label="姓名"></el-table-column>
          <el-table-column sortable prop="ticket" label="票数"></el-table-column>
          <el-table-column sortable prop="userName" label="用户"></el-table-column>
          <el-table-column prop="edit" label="操作">
            <template slot-scope="scope">
              <el-button v-if="scope.row.status==0" type="danger" size="mini" @click="handleChange(scope.$index, scope.row)">禁用</el-button>
              <el-button v-else-if="scope.row.status==1" type="success" size="mini" @click="handleChange(scope.$index, scope.row)">启用</el-button>
              <el-button type="success" size="mini" icon="view" @click="cjks;"></el-button>
            </template>
          </el-table-column>
        </el-table>
        
        <!--批量删除 与 分页-->
        <el-col :span="24" class="toolbar" style="margin-top:2%;">
          <el-button type="danger" :disabled="this.sels.length===0" @click.navite="deleteSome">批量删除</el-button>
          <el-pagination
            style="float:right;"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 50]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </el-col>

        <!-- 新增 -->
        <el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
          <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="addForm.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="期数" prop="stage_id">
              <el-select v-model="addForm.stage_id" placeholder="请选择" @change="selectChange">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="头像" prop="image">
                <el-upload
                  id="uploadImage"
                  action="/file/upload"
                  list-type="picture-card"
                  :headers="header"
                  :on-remove="handleRemoveImage"
                  :on-success="handleSuccessImage"
                  :before-upload="imageBeforeAvatarUpload"
                  :data="{type:'images'}"
                  name="file"         
                  >
                  <i class="el-icon-plus"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="视频" prop="video">
                <el-upload
                  id="uploadVideo"
                  action="/file/upload"
                  :headers="header"
                  :before-upload="videoBeforeAvatarUpload"
                  :on-remove="handleRemoveVideo"
                  :on-success="handleSuccessVideo"
                  :data="{type:'video'}"
                  name="file"
                  >
                  <el-button size="small" type="primary" :disabled="addVideoDisabled">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传视频文件，且不超过50M</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="视频封面" prop="videoImg">
                <el-upload
                  id="uploadVideoImg"
                  action="/file/upload"
                  list-type="picture-card"
                  :headers="header"
                  :on-remove="handleRemoveVideoImg"
                  :on-success="handleSuccessVideoImg"
                  :before-upload="imageBeforeAvatarUpload"
                  :data="{type:'videoImg'}"
                  name="file"         
                  >
                  <i class="el-icon-plus"></i>
                </el-upload>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click.native="addFormVisible = false">取消</el-button>
            <el-button type="primary" @click.native="addSubmit('addForm')">提交</el-button>
          </div>
        </el-dialog>
  
        <!-- 编辑 -->
        <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
          <el-form :model="editForm" :rules="editFormRules" ref="editForm">
            <el-form-item label="编号">
              <el-input v-model="editForm.id" disabled auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
              <el-input v-model="editForm.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click.native="editFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="editFormVisible = false">提 交</el-button>
          </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
          return {
            imageUrl: '',
            activeIndex: '1',
            tableData: [],
            editFormVisible: false,//编辑界面显示
            editFormRules: {
              name: [
                { required: true, message: '请输入姓名', trigger: 'blur' }
              ]
            },
            header: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            //编辑界面数据
            editForm: {
              id: 0,
              name: '',
            },
            addFormVisible: false,//新增界面显示
            //新增界面数据
            addVideoDisabled: false,
            addForm: {
              id: '',
              name: '',
              stage_id: '',
              image: '',
              video: '',
              videoImg: '',
              ticket: 0
            },
            //期数
            options: [{
              value: '1',
              label: '第一期'
            },{
              value: '2',
              label: '第2期'
            },{
              value: '3',
              label: '第3期'
            }],
            // formLabelWidth: '80px',//
            editId: null,
            total: 0,
            page: 1,
            sels: [],
            filters: {
              name: ''
            },
            currentPage: 1,
            addFormRules: {
              name: [
                { required: true, message: '请输入选手名称', trigger: 'blur' },
                { min: 2, max: 7, message: '长度在 2 到 7 个字符', trigger: 'blur' }
              ],
              stage_id: [
                { required: true, message: '请选择所属期数', trigger: 'change' }
              ],
              image: [
                { required: true, message: '请选手头像', trigger: 'change' }
              ],
              video: [
                { required: true, message: '请上传视频', trigger: 'change' }
              ],
              videoImg: [
                { required: true, message: '请上传视频封面图', trigger: 'change' }
              ],
            }
          }
        },
        methods: {
          //上传图片限制
          imageBeforeAvatarUpload(file) {
            const isIMAGE = file.type.indexOf("image")>=0;
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isIMAGE) {
              this.$message.error('只能上传图片格式文件!');
            }
            if (!isLt2M) {
              this.$message.error('图片大小不能超过 2MB!');
            }
            return isIMAGE && isLt2M;
          },
          //上传视频限制
          videoBeforeAvatarUpload(file) {
            const isVIDEO = file.type.indexOf("video")>=0;
            const isLt2M = file.size / 1024 / 1024 < 100;

            if (!isVIDEO) {
              this.$message.error('只能上传视频格式文件!');
            }
            if (!isLt2M) {
              this.$message.error('上传头像图片大小不能超过 100MB!');
            }
            return isVIDEO && isLt2M;
          },
          //删除头像显示添加框
          handleRemoveImage(file, fileList) {
            this.addForm.image = "";
            $("#uploadImage>div").fadeIn();
          },
          //添加头像成功添加框消失
          handleSuccessImage(response, file, fileList){
            this.addForm.image = file.name;
            $("#uploadImage>div").fadeOut();
          },
          //删除视频封面图显示添加框
          handleRemoveVideoImg(file, fileList) {
            this.addForm.videoImg = "";
            $("#uploadVideoImg>div").fadeIn();
          },
          //添加视频封面图添加框消失
          handleSuccessVideoImg(response, file, fileList){
            this.addForm.videoImg = file.name;
            $("#uploadVideoImg>div").fadeOut();
          },
          //删除视频显示添加框
          handleRemoveVideo(file, fileList) {
            this.addForm.video = "";
            this.addVideoDisabled=false;
          },
          //添加视频添加框消失
          handleSuccessVideo(response, file, fileList){
            if(this.addForm.video!=''){
                this.handleRemoveVideo(this.addForm.video,fileList);
            }
            this.addForm.video = file.name;
            this.addVideoDisabled=true;
          },
          //看log
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          //看log
          handleCurrentChange(val) {
            this.page = val;
            this.getTable();
            console.log(`当前页: ${val}`);
          },
          //这个不知道，老段你添
          selsChange: function (sels) {
            this.sels = sels;
          },
          selectChange(value) {
            this.addForm.stage_id=value;
            console.log(this.addForm.name);
          },
          //这个也不知道
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          },
          //模态框消失？
          handleClose(done) {
            done();
          },
          //新增界面显示
          handleAdd: function(){
            this.addFormVisible = true;
          },
          //新增提交按钮
          addSubmit: function(formName){
            var vue=this;
            this.$refs[formName].validate((valid) => {
              if (valid) {
                this.$nextTick(function () {
                    axios.post('/admin/index/addPlayer', {
                        player: vue.addForm
                    })
                    .then(function (response) {
                        if(response.data.code==1){
                            vue.$message({
                                type:"success",
                                message: response.data.msg,
                            });
                        }else{
                            vue.$message.error(response.data.msg);
                        }
                        vue.addFormVisible=false;
                        vue.addForm.id=response.data.id;;
                        var player = JSON.parse(JSON.stringify(vue.addForm)) ;
                        vue.tableData.push(player);
                    })
                    .catch(function (response) {

                    });
                })
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          deleteSome() {
            var vue=this;
            var deleteId=[];
            for(var i=0;i<vue.sels.length;i++){
                deleteId.push(vue.sels[i].id);
            }
            console.log(deleteId);
            this.$nextTick(function () {
                axios.post('/admin/index/deleteSome', {
                    id:deleteId
                })
                .then(function (response) {
                   
                })
                .catch(function (response) {
                    console.log(response);
                });
            })
          },
//=======================分割线===================================

          //显示编辑界面
          handleEdit: function (index, row) {
            this.editFormVisible = true;
            this.editForm = Object.assign({}, row);
          },
          //删除
          handleChange:  function (index, row) {
            if(row.status==0){
              this.disableVideo(row);
            }else{
              this.enableVideo(row);
            }
          },
          //禁用视频
          disableVideo: function($row){
            this.$confirm('确定禁用吗?', '提示', {
              type: 'warning'
                }).then(() => {       
                    var vue=this;
                    this.$nextTick(function () {
                        axios.post('/admin/disableVideo', {
                            id:$row.id
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
                            vue.tableData.splice(index,1);
                        })
                        .catch(function (response) {
                            console.log(response);
                        });
                    })
                }).catch(() => {
            });        
          },
          //启用视频
          enableVideo:function($row){
             this.$confirm('确定启用吗?', '提示', {
              type: 'warning'
                }).then(() => {       
                    var vue=this;
                    this.$nextTick(function () {
                        axios.post('/admin/enableVideo', {
                            id:$row.id
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
                            vue.tableData.splice(index,1);
                        })
                        .catch(function (response) {
                            console.log(response);
                        });
                    })
                }).catch(() => {
            });        
          },
          //获取列表
          getTable: function() {
            var vue=this;
            this.$nextTick(function () {
                axios.post('/admin/getVideo', {})
                .then(function (response) {
                    vue.total = response.data.total;
                    vue.tableData=response.data;
                })
                .catch(function (response) {
                    console.log(response);
                });
            })
          },
        },
        //加载页面请求数据
        mounted: function(){
          this.getTable();
        }
  }
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 100px;
    text-align: center;
  }
  #uploadImage .el-upload-list__item{
    width: 60px !important;
    height: 60px !important;
  }
  #uploadImage .el-upload--picture-card{
    width: 60px !important;
    height: 60px !important;
    line-height:70px !important;
  }
  #uploadVideoImg .el-upload-list__item{
    width: 300px !important;
  }
  #uploadVideoImg .el-upload--picture-card{
    width: 300px !important;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-dialog--tiny{
    width: auto !important;
  }
  .el-table__body-wrapper{
    overflow: hidden !important;
  }
</style>