<template>
  <div>
    <el-row>
      <el-col class="videolist" :span="4" v-for="(o, index) in 7" :key="o" :offset="index % 5 ==0 ? 0 : 1">
        <el-card :body-style="{ padding: '0px' }">
          <video
                id="my-player"
                class="video-js"
                controls
                preload="auto"
                poster="http://element.eleme.io/static/hamburger.50e4091.png"
                data-setup='{}'>
              <source src="/storage/app/uploads/video/2DC7014ECE4E573C6EF8D41496C515BB.mp4" type="video/mp4"></source>
          </video>
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">时间</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentDate: new Date()
      }
    },

    methods: {
     
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
</style>
  