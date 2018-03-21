<template>
	<div>
		<group title="我发起的所有投票">
			<div v-for="page in list" style="padding-bottom:35px;background:rgba(239, 239, 244, 0.3);">
			<form-preview header-label="活动" :header-value="page.title" :body-items="page.list"></form-preview>
			<x-button :gradients="['#FF5E3A', '#FF9500']" @click.native="showPage(page.page_id)">查看</x-button>
			</div>
		</group>
	</div>
</template>

<script>
	import { FormPreview, XButton, Group } from 'vux'

	export default {
		data() {
			return {
				list:[]
			}
		},
		methods: {
			 showPage ($id) {
				this.$router.push("/page/"+$id);
			},
			getPage(searchValue) {
				var vue=this;
				this.$nextTick(function () {
					axios.post('/home/getPage', {
					'search' : searchValue
					})
					.then(function (response) {
						var list=[];
						for(var i=0;i<response.data.result.length;i++){
						var obj={
							'page_id' : response.data.result[i].id,
							'title' : response.data.result[i].title,
							'list' : [{
							'label' : "发起人",
							'value' : response.data.result[i].name
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
		},
		components: {
			FormPreview,
			XButton,
			Group
		},
		mounted() {
			this.getPage('');
		},
	}
</script>

<style>
  .weui-form-preview__btn_primary{
    color:#FF9900 !important;
  }
</style>