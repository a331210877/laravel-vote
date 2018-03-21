<template>
  <div>
    <group title="我添加的所有选手">
        <div class="player" v-for="v in playList">
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
        </div>
    </group>
  </div>
</template>


<script>

import { Group , Cell } from 'vux'

    export default {
        components: {
            Group,
            Cell,
        },
        data(){
            return {
                playList : []
            }
        },
        methods:{
            getPlayer: function(){
                var vue=this;
                axios.post('/home/getPlayer', {
                })
                .then(function (response) {
                   vue.playList=response.data.result;
                })
                .catch(function (response) {
                   console.log(response);
                });
            },
        },
        mounted() {
            this.getPlayer();
        }
    }
</script>
<style>
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
    left: 87px;
    top: 55px;
}
.ticket{
    position: absolute;
    left: 245px;
    top: 20px;
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
