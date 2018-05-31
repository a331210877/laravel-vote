<template>
  <div>
    <group title="个人信息">
      <cell title="头像" :value="userInfo.avatar"> <img :src="userInfo.avatar" alt="" id="headimgurl"></cell>
      <cell title="昵称" :value="userInfo.nickname"></cell>
      <cell title="国家" :value="original.country"></cell>
      <cell title="省份" :value="original.province"></cell>
      <cell title="城市" :value="original.city"></cell>
    </group>

    <group title="添加">
      <cell title="添加视频" link="/me/addPlayer"></cell>
      <cell title="发起投票" link="/me/addPage"></cell>
    </group>

    <group title="数据中心">
      <cell title="查看选手" link="/me/myPlayer"></cell>
      <cell title="查看投票" link="/me/myPage"></cell>
    </group>
  </div>
</template>


<script>
    import { Group , Cell } from 'vux'
    export default {
        components: {
            Group,
            Cell
        },
        data(){
            return {
                userInfo : "",
                original : "",
            }
        },
        methods:{
            getInfo: function(){
                var vue=this;
                axios.post('/home/getUserInfo', {
                })
                .then(function (response) {
                   vue.userInfo=response.data.result.default;
                   vue.original=response.data.result.default.original
                })
                .catch(function (response) {
                   console.log(response);
                });
            },
        },
        mounted() {
            this.getInfo();
        }
    }
</script>
<style>
    #headimgurl{
        width: 65px;
    }
    .weui-cell{
        line-height: 30px;
    }
</style>

