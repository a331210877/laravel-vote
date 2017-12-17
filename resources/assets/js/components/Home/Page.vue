<template>
    <div>
        <x-img :default-src="topImg" style="width: 100%"></x-img> 
        <group-title style="border-bottom: 1px solid #D9D9D9;
    padding-bottom: 5px;">{{ stage }}</group-title>
        <toast v-model="show" :type="showMesType">{{ message }}</toast>
        <div class="player" v-for="v in videoList">
            <img :src="v.image" alt="">
            <span class="id">编号：{{ v.id }}</span>
            <h4 class="name">{{ v.name }}</h4>
            <span class="ticket"><strong>{{ v.ticket }}</strong>票</span>        
            <video
                id="my-player"
                class="video-js"
                controls
                preload="auto"
                :poster="v.videoImg"
                data-setup='{}'>
              <source :src="v.video" type="video/mp4"></source>
            </video>
            <x-button id="submit" :playerid="v.id" class="vote" type="primary" @click.native="showMes(v)" :show-loading="v.isLoading" :disabled="disabled"> 投票 </x-button>
        </div>
    </div>
</template>

<script>
    import { Search, GroupTitle, XImg, Panel, XButton, Toast  } from 'vux'
    export default {
        data () {
          return {
            topImg: "images/top.jpg",
            stage: "第一期投票",
            showMesType: "success",
            message: "投票成功",
            show: false,
            disabled: false,
            videoList: [],
          }
        },
        components: {
            Search,
            GroupTitle,
            XImg,
            Panel,
            XButton,
            Toast
        },
        mounted: function() {
            var vue=this;
            this.$nextTick(function () {
                axios.post('/home/page', {})
                .then(function (response) {
                    vue.videoList=response.data;
                })
                .catch(function (response) {
                    console.log(response);
                });
            })
        },
        methods: {
            showMes (v) {
                if(v.isLoading){return;}
                var vue=this;
                v.isLoading =true;
                axios.post('/home/vote', {
                    id:v.id
                }).then(function (response) {
                    if(response.data.code==1){
                        vue.showMesType="success"
                        v.ticket+=1;
                    }else{
                        vue.showMesType="cancel"
                    }
                    vue.message=response.data.msg
                    vue.show=true
                    v.isLoading=false;
                    vue.disabled=true;
                })
                .catch(function (response) {
                    console.log(response);
                });
            }, 
        },
    }
</script>

<style scoped>
    .player {
        position: relative;
        float: left;
        padding: 20px 10px;
        width:100%;
        box-sizing: border-box;

    }
    .player>img{
        height:60px;
        width: 60px;
    }
    .player:before {
        content: " ";
        position: absolute;
        right: 0;
        top: 0;
        width: 1px;
        bottom: 0;
        border-right: 1px solid #D9D9D9;
        color: #D9D9D9;
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
        -webkit-transform: scaleX(0.5);
        transform: scaleX(0.5);
    }
    .player:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #D9D9D9;
        color: #D9D9D9;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }
    .id{
        color: #5e5e5e;
        vertical-align: top;
        position: absolute;
        left: 88px;
    }
    .name{
        display: inline-block;
        color: black;
        position: absolute;
        left: 88px;
        top: 37px;
    }
    .ticket{
        position: absolute;
        left: 145px;
        top: 58px;
        color: #5e5e5e;
    }
    .vote{
        margin-top: 5px;
    }
    .grid-center {
      display: block;
      text-align: center;
      color: #666;
    }
    #my-player{
        width: 100%;
        height: 164px;
        margin-top: 5px;
    }
</style>
