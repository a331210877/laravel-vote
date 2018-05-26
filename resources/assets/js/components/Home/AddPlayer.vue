<template>
  <div>
    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="msg" position="top"></toast>
    <div v-transfer-dom>
      <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
        <div class="img-box">
          <img src="https://ws1.sinaimg.cn/large/663d3650gy1fq6824ur1dj20ia0pydlm.jpg" style="max-width:100%">
        </div>
        <div @click="showHideOnBlur=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
    <group title="请输入选手姓名">
      <x-input title="姓名" name="username" text-align="right" placeholder="请输入姓名" is-type="china-name"></x-input>
    </group>
    <!-- <uploader
        :max="1"
        title="上传头像"
        :upload-url="uploadUrl"
        :images="image"
        name="file"
        :params="{type:'images'}"
        @preview="previewMethod"
    ></uploader> -->
    <!-- <uploader
        :max="1"
        :images="images"
        title="上传视频"
        :upload-url="uploadUrl"
        name="file"
        :params="params"
    ></uploader>
    <uploader
        :max="1"
        :images="images"
        title="视频封面"
        :upload-url="uploadUrl"
        name="file"
        :params="params"
    ></uploader> -->
  </div>
</template>


<script>
    import Uploader from 'vux-uploader'
    import { Group, XInput, Toast, XDialog, TransferDomDirective as TransferDom } from 'vux'
    export default {
        components: {
            Uploader,
            XInput,
            Group,
            Toast,
            XDialog, 
        },
        data(){
            return {
                uploadUrl:"/file/upload",
                params:{},
                msg:"",
                showPositionValue:false,
                showHideOnBlur: false,
                image:[]
            }
        },
        methods:{
            previewMethod(){
                this.showHideOnBlur=true;
                console.log(this.image);
            },
        },
        mounted() {

        },
        directives: {
            TransferDom
        },
    }
</script>
<style lang="less" scoped>
@import '~vux/src/styles/close';
    .dialog-demo {
        .weui-dialog{
            border-radius: 8px;
            padding-bottom: 8px;
        }
        .dialog-title {
            line-height: 30px;
            color: #666;
        }
        .img-box {
            height: 350px;
            overflow: hidden;
        }
        .vux-close {
            margin-top: 8px;
            margin-bottom: 8px;
        }
    }
</style>

