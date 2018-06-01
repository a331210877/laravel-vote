<template>
	<div>
        <group title="添加选手" style="margin-bottom:20px;">

        </group>
		<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="addForm.name" auto-complete="off"></el-input>
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
            <el-form-item label="封面" prop="videoImg">
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
        <div slot="footer" class="dialog-footer" style="text-align:center;">
            <el-button @click.native="cencel();">取消</el-button>
            <el-button type="primary" @click.native="addSubmit('addForm')">提交</el-button>
        </div>
	</div>
</template>

<script>
	import { Group , Cell } from 'vux'

	export default {
		data() {
			return {
        addVideoDisabled: false,
        addForm: {
            id: '',
            name: '',
            image: '',
            video: '',
            videoImg: '',
            ticket: 0
        },
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
            videoImg: [
                { required: true, message: '请上传视频封面图', trigger: 'change' }
            ],
        },
        header: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="X-CSRF-TOKEN"]').content,
        },
			}
		},
		methods: {
          //添加视频封面图添加框消失
          handleSuccessVideoImg(response, file, fileList){
            this.addForm.videoImg = response;
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
            this.addForm.video = response;
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
          //删除头像显示添加框
          handleRemoveImage(file, fileList) {
            this.addForm.image = "";
            $("#uploadImage>div").fadeIn();
          },
          //添加头像成功添加框消失
          handleSuccessImage(response, file, fileList){
            this.addForm.image = response;
            $("#uploadImage>div").fadeOut();
          },
          //删除视频封面图显示添加框
          handleRemoveVideoImg(file, fileList) {
            this.addForm.videoImg = "";
            $("#uploadVideoImg>div").fadeIn();
          },
          cencel(){
            javascript :history.back(-1);
          },
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
           //新增提交按钮
          addSubmit: function(formName){
            var vue=this;
            this.$refs[formName].validate((valid) => {
              if (valid) {
                this.$nextTick(function () {
                    axios.post('/home/addPlayer', {
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
                        console.log('dasdmlkasjmdlkmjas');
                        vue.$router.push("/me/myPlayer");
                    })
                    .catch(function (response) {

                    });
                })
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          }
		},
		components: {
            Group,
            Cell
		},
		mounted() {
		
		},
	}
</script>

<style scope>
.el-input__inner{
  width:90%;
}
.el-form{
  border-bottom: 1px solid #e3dbdb;
  margin-bottom: 22px;
}
.el-form-item__label{
  font-size:18px;
  color:black;
}
</style>