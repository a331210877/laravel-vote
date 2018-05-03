<template>
  <div>
    <el-row>
      <el-col class="videolist" :span="4" v-for="(o, index) in videoList" :offset="index % 5 ==0 ? 0 : 1">
        <el-card :body-style="{ padding: '0px' }">
          <video
                id="my-player"
                class="video-js"
                controls
                preload="auto"
                :poster="o.videoImg"
                data-setup='{}'>
              <source :src="o.video" type="video/mp4"></source>
          </video>
          <div style="padding: 14px;">
            <span>{{ o.name }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ o.userName }}</time>
              <!-- <el-button type="text" class="button">操作按钮</el-button> -->
              <el-button class="button" v-if="o.status==0" type="danger" size="mini" @click="handleChange(scope.$index, scope.row)">禁用</el-button>
              <el-button class="button" v-else-if="o==1" type="success" size="mini" @click="handleChange(scope.$index, scope.row)">启用</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
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
        currentDate: new Date(),
        videoList: []
      }
    },

    methods: {
      disVideo: function($id,$row){
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
      getVideo: function(){
          var vue=this;
          axios.post('/admin/getVideo', {
          })
          .then(function (response) {
            if(response.data.code==1){
                vue.videoList=response.data.result;
                console.log(vue.videoList);
              }else{
                  vue.$message.error(response.data.msg);
              }
          })
          .catch(function (response) {
              console.log(response);
        });
      }
    },
    mounted: function(){
       this.getVideo(1,10);
    }
  }
</script>

<style scope>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .videolist{
      margin-top:20px !important;
  }
  #my-player{
      width: 100%;
      height: 123px;
      margin-top: -20px;
  }
  .button{
    padding:5px;
    margin-top: -3px;
  }
  .block{
    padding-top: 10px;
    text-align: center;
  }
</style>
  