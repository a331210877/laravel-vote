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
    <group title="发起投票">
      <x-input title="活动主题" placeholder="请输入活动主题名称" v-model="page.title" novalidate :show-clear="false" text-align="right" placeholder-align="right" ></x-input>
      <datetime v-model="page.time" format="YYYY-MM-DD HH:mm" title="截止时间"></datetime>
      <uploader
        :max="1"
        title="上传头像"
        :upload-url="uploadUrl"
        :images="page.images"
        name="file"
        :params="{type:'images'}"
        @preview="previewMethod"
      ></uploader>
    </group>
    <box gap="10px 10px">
      <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="submit()">发布投票</x-button>
    </box>
  </div>
</template>


<script>
    import Uploader from 'vux-uploader'
    import { Group, XInput, Toast, XDialog, TransferDomDirective as TransferDom, Datetime, Box, XButton } from 'vux'
    export default {
        components: {
            Uploader,
            XInput,
            Group,
            Toast,
            XDialog, 
            Datetime,
            Box,
            XButton
        },
        data(){
            return {
                uploadUrl:"/file/uploadVux",
                showPositionValue:false,
                showHideOnBlur: false,
                msg:"",
                params:{},
                page:{
                    title:"",
                    time:'',
                    images:[],
                    endTime:'',
                    image:''
                }
            }
        },
        methods:{
            previewMethod(){
                this.showHideOnBlur=true;
                console.log(this.image);
            },
            submit(){
                var vue=this;
                vue.page.endTime=new Date(vue.page.time)/1000;
                var arr=vue.page.images[0].url.split('\/')
                vue.page.image=arr[arr.length-1];
                axios.post('/home/addPage', {
                    page: vue.page
                })
                .then(function (response) {
                    if(response.data.code==1){
                        vue.$message({
                            type:"success",
                            message: response.data.msg,
                        });
                        vue.$router.push("/index");
                    }else{
                        vue.$message.error(response.data.msg);
                    }    
                })
                .catch(function (response) {

                });
            }
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
    .center {
        padding-top: 10px;
        padding-left: 15px;
        color: green;
    }
</style>

