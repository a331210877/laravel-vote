<template>
    <div>
        <swiper loop auto :list="carouselList" :index="curCarouseIndex" @on-index-change="carouselChange"></swiper>
        <search
          :results="results"
          v-model="searchValue"
          @on-submit="onSubmit()"
          ref="search">
        </search>
        <div v-for="(page,index) in list" :key="index" style="padding-bottom:35px;background:rgba(239, 239, 244, 0.3);">
          <form-preview header-label="活动" :header-value="page.title" :body-items="page.list"></form-preview>
          <x-button :gradients="['#FF5E3A', '#FF9500']" @click.native="showPage(page.page_id)">查看</x-button>
        </div>
        <load-more v-if="loadingMore==true" :show-loading="loadingIcon" :tip="loadingTip" style="margin:auto;background:rgba(239, 239, 244, 0.3);width:100%;padding-bottom: 20px;"></load-more>
        <load-more v-else-if="loadingMore==false" :show-loading="true" tip="正在加载" style="margin:auto;background:rgba(239, 239, 244, 0.3);width:100%;padding-bottom: 20px;"></load-more>
    </div>
</template>

<script>
  import { Swiper, GroupTitle, SwiperItem, XButton, Divider, Search, FormPreview, LoadMore } from 'vux'
  var vue;
  export default {
    data() {
      return {
        carouselList: [],       //轮播list
        curCarouseIndex: 0,     //当前轮播图下标
        results: [],            //搜索结果
        searchValue: '',        //搜索内容
        list: [],
        loadingMore:false,
        cuListIndex:0,
        loadingTip:"正在加载",
        loadingIcon:true,
        ifEnd:false
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
      getPage(searchValue,index) {
        var vue=this;
        if(!vue.isEnd){
          this.$nextTick(function () {
              axios.post('/home/getPage', {
                'search' : searchValue,
                'index': index
              })
              .then(function (response) {
                  if(response.data.result.length==0){
                    vue.loadingIcon=false;
                    vue.loadingTip="暂无数据";
                    vue.isEnd=true;
                    vue.loadingMore=true;
                  }
                  for(var i=0;i<response.data.result.length;i++){
                    var obj={
                      'page_id' : response.data.result[i].id,
                      'title' : response.data.result[i].title,
                      'list' : [{
                        'label' : "发起人",
                        'value' : response.data.result[i].nick_name
                      },{
                        'label' : "开始时间",
                        'value' : getLocalTime(response.data.result[i].start_time)
                      },{
                        'label' : "结束时间",
                        'value' : getLocalTime(response.data.result[i].end_time)
                      }]
                    };
                    vue.list.push(obj);
                  }
                  vue.cuListIndex=vue.list.length;
              })
              .catch(function (response) {
                  console.log(response);
              });
          })
        }
      },
      setFocus () {
        this.$refs.search.setFocus()
      },
      onSubmit () {
        this.cuListIndex=0;
        this.getPage(this.searchValue,this.cuListIndex);
      },
      showPage ($id) {
        this.$router.push("/page/"+$id);
      },
      test(){
        console.log("dasdaddddddddddddddd");
      }
    },
    mounted: function() {
      this.getCarouse(this.cuListIndex);
      this.getPage(this.searchValue,this.cuListIndex);
      vue=this;
    },
    components: {
      Swiper,
      SwiperItem,
      GroupTitle,
      XButton,
      Divider,
      Search,
      FormPreview,
      LoadMore
    },
  }

  $(window).scroll(function(){
  　　var scrollTop = $(this).scrollTop();
  　　var scrollHeight = $(document).height();
  　　var windowHeight = $(this).height();
  　　if(scrollHeight-(scrollTop + windowHeight) <90){
        if(vue.loadingMore==false){
          vue.loadingMore=true;
          setTimeout(function() {
            vue.getPage(vue.searchValue,vue.cuListIndex);
            vue.loadingMore=false;
          }, 1000)
        }
  　　}
  });
</script>

<style>
  .weui-form-preview__btn_primary{
    color:#FF9900 !important;
  }
</style>

