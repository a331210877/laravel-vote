<template>
	<div>
		<divider v-if="list.length==0"> 暂无数据 </divider>
		<divider v-else> 我发起的所有投票 </divider>
		<x-button  v-if="list.length==0" :gradients="['#FF5E3A', '#FF9500']" @click.native="addPage">发起投票</x-button>
		<flexbox orient="vertical">
			<flexbox-item v-for="(page,index) in list" :key="index" id="page">
				<form-preview header-label="活动" :header-value="page.title" :body-items="page.list"></form-preview>
				<flexbox>
					<flexbox-item>
					<x-button :gradients="['#FF5E3A', '#FF9500']" @click.native="showPage(page.page_id)">浏览</x-button>
					</flexbox-item>
					<flexbox-item>
					<x-button type="primary" @click.native="showPageInfo(page.page_id)">信息</x-button>
					</flexbox-item>
					<flexbox-item>
					<x-button type="warn" @click.native="showEdit(page.page_id)">操作</x-button>
					</flexbox-item>
				</flexbox>
				<img v-if="page.statusPng==1" src="/storage/uploads/images/end.png" alt="" class="weui-media-box__thumb">
			</flexbox-item>
		</flexbox>
		<div v-transfer-dom>
			<popup v-model="showEdita">
				<popup-header
				left-text="取消"
				right-text="确定"
				title="请选择操作"
				:show-bottom-border="false"
				@on-click-left="showEdita = false"
				@on-click-right="editRes()"></popup-header>
				<group gutter="0">
					<radio :options="editArr" @on-change="editChange"></radio>
				</group>
			</popup>
    	</div>
		<toast v-model="showMes" :type="mesStatus">{{ editMessage }}</toast>
	</div>
</template>

<script>
	import { LoadMore, FormPreview, XButton, Group, Flexbox, FlexboxItem, Divider, PopupHeader, Popup, TransferDom, XSwitch, Radio, Toast } from 'vux'

	export default {
		data() {
			return {
				list:[],
				showEdita: false,
				editArr: [{
					key : 0,
					value : '终止投票'
				},{
					key : 1,
					value : '删除投票'
				}],
				sureEdit: -1,
				showMes: false,
				editMessage: "投票已截止",
				editVoteId: -1,
				mesStatus: 'success'
			}
		},
		methods: {
			showPage ($id) {
				this.$router.push("/page/"+$id);
			},
			showPageInfo ($id) {
				this.$router.push("/me/pageInfo/"+$id);
			},
			showEdit($page_id) {
				this.editVoteId = $page_id;
				this.showEdita = true;
			},
			showMessage($msg, $status) {
				this.showMes = true;
				this.editMessage = $msg;
				this.mesStatus = $status;
			},
			addPage() {
				this.$router.push("/me/addPlayer");
			},
			editRes() {
				if (this.sureEdit == 0) {
					var vue = this;
					var list = vue.list;
					list.forEach(function(value, index, list){
						if (value.page_id == vue.editVoteId && value.statusPng == 1) {
							vue.showMessage("该投票已经截止", "warn");
							return;
						} else {
							vue.endVote(vue.editVoteId);
							return;
						}
					})
				} else if(this.sureEdit == 1) {
					this.delPage(this.editVoteId);
				}
				this.showEdita = false;
			},
			editChange(key, label) {
				this.sureEdit = key;
			},
			getPage(searchValue) {
				var vue=this;
				this.$nextTick(function () {
					axios.post('/home/getMyPage', {
						'search' : searchValue
					})
					.then(function (response) {
						var list=[];
						for(var i=0;i<response.data.result.length;i++){
						var obj={
							'page_id' : response.data.result[i].id,
							'title' : response.data.result[i].title,
							'statusPng' : response.data.result[i].statusPng,
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
						list.push(obj);
						}
						vue.list=list;
					})
					.catch(function (response) {
						console.log(response);
					});
				})
			},
			endVote($page_id) {
				var vue=this;
				this.$nextTick(function () {
					axios.post('/home/endVote', {
						'page_id' : $page_id
					})
					.then(function (response) {
						vue.showMessage(response.data.msg, "success");
					})
					.catch(function (response) {
						console.log(response);
					});
				})
			},
			delPage($page_id) {
				var vue=this;
				this.$nextTick(function () {
					axios.post('/home/delPage', {
						'page_id' : $page_id
					})
					.then(function (response) {
						vue.showMessage(response.data.msg, "success");
						if (response.data.code == 1) {
							vue.list.forEach(function(value, index, list){
								if (value.page_id == vue.editVoteId) {
									vue.list.splice(index, 1);
								}
							})
						}
					})
					.catch(function (response) {
						console.log(response);
					});
				})
			}
		},
		components: {
			FormPreview,
			XButton,
			Group,
			Flexbox,
			FlexboxItem,
			Divider,
			PopupHeader,
			Popup,
			Group,
			XSwitch,
			Radio,
			Toast,
			LoadMore
		},
		directives: {
			TransferDom
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
  .weui-form-preview__value{
	font-size: 1.2em !important;
  }
  #page>img{
	  width:80px;
	  position: absolute;
	  z-index: 1;
	  top: 77px;
	  left: 99px;
  }
  #page{
	  position: relative;
  }
</style>