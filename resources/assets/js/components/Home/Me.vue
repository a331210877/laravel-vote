<template>
  <div>
    <group title="个人信息">
      <cell title="添加选手" link="/addPlayer"></cell>
      <cell title="添加投票" link="/addPage"></cell>
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
             
            }
        },
        methods:{
            getInfo: function(){
                axios.post('/home/getUserInfo').then(res => {
                }).catch(err => {
                    this.$vux.toast.text('网络异常!', 'top')
                })
            },
        },
        mounted() {
            this.getInfo();
        }
    }
</script>
