<template>
    <div>
        <swiper loop auto :list="carouselList" :index="curCarouseIndex" @on-index-change="carouselChange"></swiper>
        <search
          :results="results"
          v-model="searchValue"
          @on-submit="onSubmit"
          :autoFixed="false"
          ref="search">
        </search>
        <div v-for="page in list" style="padding-bottom:35px;background:rgba(239, 239, 244, 0.3);">
          <form-preview header-label="活动" :header-value="page.title" :body-items="page.list"></form-preview>
          <x-button :gradients="['#FF5E3A', '#FF9500']" @click.native="showPage(page.page_id)">查看</x-button>
        </div>
    </div>
</template>

<script>
  import { Swiper, GroupTitle, SwiperItem, XButton, Divider, Search, FormPreview } from 'vux'

  export default {
    data() {
      return {
        carouselList: [],       //轮播list
        curCarouseIndex: 0,     //当前轮播图下标
        results: [],            //搜索结果
        searchValue: '',        //搜索内容
        list: [],
      }
    },
    methods :{
      carouselChange (index) {    //轮播切换时间
        this.curCarouseIndex = index
      },
      getCarouse () {     //获取所有轮播图
        var vue=this;
        this.$nextTick(function () {
            axios.post('/home/getCarousel', {
            })
            .then(function (response) {
                vue.carouselList=response.data.result;
            })
            .catch(function (response) {
                console.log(response);
            });
        })
      },
      getPage() {
        var vue=this;
        this.$nextTick(function () {
            axios.post('/home/getPage', {
            })
            .then(function (response) {
                var list=[];
                for(var i=0;i<response.data.result.length;i++){
                  var obj={
                    'page_id' : response.data.result[i].id,
                    'title' : response.data.result[i].title,
                    'list' : [{
                      'label' : "发起人",
                      'value' : response.data.result[i].user_id
                    },{
                      'label' : "开始时间",
                      'value' : getLocalTime(response.data.result[i].start_time)
                    },{
                      'label' : "结束时间",
                      'value' : getLocalTime(response.data.result[i].end_time)
                    }]
                  };
                  list.push(obj);
                }
                vue.list=list;
            })
            .catch(function (response) {
                console.log(response);
            });
        })
      },
      setFocus () {
        this.$refs.search.setFocus()
      },
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
      showPage ($id) {
        this.$router.push("/home/page/"+$id);
      }
    },
    mounted: function() {
      this.getCarouse();
      this.getPage();
    },
    components: {
      Swiper,
      SwiperItem,
      GroupTitle,
      XButton,
      Divider,
      Search,
      FormPreview 
    },
  }
</script>

<style>
  .weui-form-preview__btn_primary{
    color:#FF9900 !important;
  }
</style>
