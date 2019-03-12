<template>
  <div class="main-content">


	
	<div class="content">

		<ul class="seting-list">
			
			<li class="set-item" v-for="(item,index) in data" :key="index" >
				<button class="set-btn" hover-class="active" >{{item.name}}
						<image class="icon_right" src="../../static/images/b-right.png"/>
						<image class="icon_left" src="../../static/images/icon_ding@2x.png"/>
						
				</button>
			</li>					
		</ul>



	</div>



  </div>
</template>

<script>
import {regionList} from './srevice.js';
export default {

  data () {
    return {
			data:[],
    }
  },
	  onLoad(){
	  	this._regionList();
	  },
		onPullDownRefresh() {
			
			this._regionList();

		},  
	methods:{
		_regionList(){
				wx.showLoading({
					title: '加载中',
				})			
			regionList().then((res)=>{
				
				this.data = res.object;
					wx.hideLoading();
					wx.stopPullDownRefresh();				
			}).catch((res)=>{
					wx.hideLoading();
					wx.stopPullDownRefresh();				
					wx.showToast({
						title: res.message,
						icon: 'none',
						duration: 2000
					})					
				
			})
			
			
		}
		
		
	}

}
</script>

<style  lang="scss" scoped >
		.main-content{
			position: relative;
			height: auto;
			width: 100%;
			box-sizing: border-box;
			min-height: 100vh;
			background: #F1F1F1;
		}


	
	.content{
		background: none;
		height: auto;
		width: 100%;
	}
	
	.seting-list{
		padding-top: 10px;
		width: 100%;
		background: none;
		height: auto;
		.set-item{
			margin-bottom: 10px;
			height: 36px;
			width: 100%;
			background: #FFFFFF;
			box-sizing: border-box;
			.set-btn{
				height: 36px;
				line-height: 36px;
				width: 100%;
				background: none;
				padding: 0 10px;
				font-size: 12px;
				color: #007AFF;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				text-align: left;
				.icon_right{
					margin-top: 13px;
					float: right;
					height: 11px;
					width: 11px;
				}
				.icon_left{
					float: left;
					height: 16px;
					width: 11px;
					margin-right: 6px;
					margin-top: 10px;			
				}
			}
		}
	}




	
	button::after {
		border: none;
	}
	
	button.active {

		background-color:#f6f6f6 !important;
	}
	
</style>
