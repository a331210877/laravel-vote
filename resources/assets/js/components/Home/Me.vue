<template>
  <div>
    <group title="个人信息">
      <cell title="添加选手" link="/addPlayer"></cell>
      <cell title="添加投票" link="/addPage"></cell>
    </group>
    {{ userInfo }}
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
            }
        },
        methods:{
            getInfo: function(){
                var vue=this;
                axios.post('/home/getUserInfo', {
                })
                .then(function (response) {
                   console.log(response.data.result);
                   vue.userInfo=response.data.result;
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
