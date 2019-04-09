<template>
	<div>
		<panel header="目前票数统计结果" :list="list" type="1"></panel>
		<a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" v-for="(player,index) in list" :key="index">
			<div class="weui-media-box__hd">
				<img :src="player.image" alt="" class="weui-media-box__thumb">
			</div> 
			<div class="weui-media-box__bd">
				<div class="weui-cell">
					<div class="weui-cell__hd"></div> 
					<div class="vux-cell-bd vux-cell-primary">
						<p>
							<label class="vux-label">{{ player.name }}</label> 
							<label class="vux-label">
							<div class="weui-media-box__hd">
								<img v-if="index==0" src="/storage/uploads/images/first.png" alt="" class="weui-media-box__thumb">
								<img v-if="index==1" src="/storage/uploads/images/second.png" alt="" class="weui-media-box__thumb">
								<img v-if="index==2" src="/storage/uploads/images/third.png" alt="" class="weui-media-box__thumb">
							</div> 
							</label>
						</p> 
						<span class="vux-label-desc"></span>
					</div> 
					<div class="weui-cell__ft"> {{ player.ticket }} </div> 
				</div>
			</div>
		</a>
		<panel header="柱状图对比" :list="list" type="1"></panel>
		<v-chart
			ref="demo"
			:data="data">
			<v-bar></v-bar>
			<v-tooltip :show-item-marker="false"></v-tooltip>
		</v-chart>
    	<x-button type="primary" plain @click.native="$refs.demo.rerender()">刷新</x-button>
		<panel header="投票记录" :list="list" type="1"></panel>
		<div style="overflow:auto;height:200px;">		
			<p v-for="(player,index) in logs" :key="index" style="color: #999999;font-size: 13px;padding:6px 7px;">{{ player.create_time }}<strong> {{ player.votename }} </strong>为<strong> {{ player.bvotename }} </strong>投了一票</p>
		</div>
	</div>
</template>

<script>
	import { Panel, Cell, VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton } from 'vux'

	export default {
		data() {
			return {
				list: [],
				data: [],
				logs: [],
			}
		},
		methods: {
			getRankList(page_id) {
				var vue=this;
				this.$nextTick(function () {
					axios.post('/home/getRankList', {
                        'page_id': page_id
					})
					.then(function (response) {
						var list=[];
						var data=[];
						for(var i=0;i<response.data.result.length;i++){
							var obj={
								'image' : response.data.result[i].image,
								'name' : response.data.result[i].name,
								'ticket' : response.data.result[i].ticket
							};
							var dt={
								'year' : response.data.result[i].name,
								'sales' : response.data.result[i].ticket
							}
							list.push(obj);
							data.push(dt);
						}
						vue.list=list;
						vue.data=data;
						setTimeout(function(){
                        	vue.$refs.demo.rerender();
                        },500);
					})
					.catch(function (response) {
						console.log(response);
					});
				})
			},
			getVoteLog(page_id) {
				var vue=this;
				this.$nextTick(function () {
					axios.post('/home/getVoteLog', {
                        'page_id': page_id
					})
					.then(function (response) {
						var logs=[];
						for(var i=0;i<response.data.result.length;i++){
							var obj={
								'create_time' : vue.formatDate(new Date(response.data.result[i].create_time*1000)),
								'votename' : response.data.result[i].nick_name,
								'bvotename' : response.data.result[i].name
							};
							logs.push(obj);
						}
						vue.logs=logs;
					})
					.catch(function (response) {
						console.log(response);
					});
				})
			},
		},
		components: {
			Panel,
			Cell,
			VChart,
			VLine,
			VArea,
			VTooltip,
			VLegend,
			VBar,
			XButton
		},
		mounted() {
			var page_id = this.$route.params.id;
			this.getRankList(page_id);
			this.getVoteLog(page_id);
		},
	}
</script>

<style>
	.weui-media-box_appmsg {
		line-height: 45px;
	}
	.weui-media-box {
		padding: 0px !important;
	}
	.weui-media-box:before {
		left: 0px !important;
	}
	.vux-label .weui-media-box__thumb {
		width: 50% !important;
	}
</style>