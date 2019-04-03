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
        <load-more v-else-if="loadingMore==false" :show-loading="false" tip="暂无数据" style="margin:auto;background:rgba(239, 239, 244, 0.3);width:100%;padding-bottom: 20px;"></load-more>
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
        loadingMore:true,
        cuListIndex:0,
        loadingTip:"正在加载",
        loadingIcon:true,
        isEnd:false
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
                  if(response.data.result.pageCount.length==0 || response.data.result.select_row.length==0){
                    vue.loadingIcon=false;
                    vue.loadingTip="暂无数据";
                    vue.isEnd=true;
                    vue.loadingMore=true;
                  } else {
                    for(var i=0;i<response.data.result.select_row.length;i++){
                      var obj={
                        'page_id' : response.data.result.select_row[i].id,
                        'title' : response.data.result.select_row[i].title,
                        'list' : [{
                          'label' : "发起人",
                          'value' : response.data.result.select_row[i].nick_name
                        },{
                          'label' : "开始时间",
                          'value' : getLocalTime(response.data.result.select_row[i].start_time)
                        },{
                          'label' : "结束时间",
                          'value' : getLocalTime(response.data.result.select_row[i].end_time)
                        }]
                      };
                      vue.list.push(obj);
                    }
                    vue.cuListIndex=vue.list.length;
                  }
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
  var flag = false;
  $(window).scroll(function(){
  　　var scrollTop = $(this).scrollTop();
  　　var scrollHeight = $(document).height();
  　　var windowHeight = $(this).height();
  　　if(scrollHeight-(scrollTop + windowHeight) <10 && !flag){
        flag = true;
        if(!vue.isEnd){
          vue.loadingMore=true;
          vue.loadingTip="正在加载";
          vue.loadingIcon=true;
          setTimeout(function() {
            vue.getPage(vue.searchValue,vue.cuListIndex);
            vue.loadingMore=false;
            vue.loadingIcon=false;
          }, 1000)
        }
        flag = false;
  　　}
  });
</script>

<style>
  .weui-form-preview__btn_primary{
    color:#FF9900 !important;
  }
</style>

