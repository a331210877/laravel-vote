<template>
  <div>
    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="msg" position="top"></toast>
     <div v-transfer-dom>
      <popup v-model="showPlayer" position="bottom" max-height="70%">
        <group>
          <!-- <cell v-for="i in 20" :key="i" :title="i"></cell> -->
          <checklist title="添加选手" label-position="left" required :options="commonList" v-model="checklistIndex" @on-change="change"></checklist>
        </group>
        <div style="padding: 15px;">
          <x-button @click.native="showPlayer = false" plain type="primary"> 完成 </x-button>
        </div>
      </popup>
    </div>
    <!-- <checklist :title="$t('Basic Usage')" :label-position="labelPosition" required :options="commonList" v-model="checklist001" @on-change="change"></checklist> -->
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
      <x-input title="活动主题" :max="10" placeholder="请输入活动主题名称" v-model="page.title" novalidate :show-clear="false" text-align="right" placeholder-align="right" ></x-input>
      <datetime v-model="page.time" format="YYYY-MM-DD HH:mm" title="截止时间"></datetime>
      <uploader
        :max="1"
        title="上传活动海报"
        :upload-url="uploadUrl"
        :images="page.images"
        name="file"
        :params="{type:'images'}"
        @preview="previewMethod"
      ></uploader>
      <group>
          <cell v-for="(v,k) in selPlayerList" :key="k" :title="v"></cell>
      </group>
    </group>
    <box gap="10px 10px">
      <x-button :gradients="['#6F1BFE', '#9479DF']" @click.native="showPlayer=true;">添加视频</x-button>
    </box>
    
    <box gap="10px 10px">
      <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="submit()">发布投票</x-button>
    </box>
  </div>
</template>


<script>
    import Uploader from 'vux-uploader'
    import { Group, XInput, Toast, XDialog, TransferDomDirective as TransferDom, Datetime, Box, XButton, Popup, Cell, Checklist } from 'vux'
    export default {
        components: {
            Uploader,
            XInput,
            Group,
            Toast,
            XDialog, 
            Datetime,
            Box,
            XButton,
            Popup,
            Cell,
            Checklist
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
                },
                showPlayer: false,
                commonList: [],
                checklistIndex: [],
                selPlayerList:[],
                loading:false
            }
        },
        methods:{
            change (val, label) {
                if(this.loading){
                    console.log(val);
                    this.selPlayerList=label;
                }
            },
            previewMethod(){
                this.showHideOnBlur=true;
                console.log(this.image);
            },
            alert($msg){
                this.msg=$msg;
                this.showPositionValue=true;
            },
            submit(){
                if(this.page.title==''){
                    this.alert("请输入活动名称");
                }else if(this.page.time==''){
                    this.alert("请选择截止时间");
                }else if(this.page.images.length==0){
                    this.alert("请上传活动海报");
                }else if(this.checklistIndex.length==0){
                    this.alert("请添加视频");
                }else{
                    var vue=this;
                    vue.page.endTime=new Date(vue.page.time)/1000;
                    var arr=vue.page.images[0].url.split('\/')
                    vue.page.image=arr[arr.length-1];
                    axios.post('/home/addPage', {
                        page: vue.page,
                        idList:vue.checklistIndex
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
            getMyPlayer(){
                var vue=this;
				this.$nextTick(function () {
					axios.post('home/getMyPlayer', {
					})
					.then(function (response) {
                        alert(response.data);
						// var commonList=[];
                        // var listIndex=[];
						// for(var i=0;i<response.data.length;i++){
                        //     var obj={
                        //         'key':response.data[i].id,
                        //         'value':response.data[i].name
                        //     };
						//     commonList.push(obj);
                        // }
                        // vue.commonList=commonList;
                        // vue.loading=true;
					})
					.catch(function (response) {
						console.log(response);
					});
				})
            }
        },
        mounted() {
            this.getMyPlayer();
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
    .vux-popup-dialog {
        background: white;
    }
</style>

