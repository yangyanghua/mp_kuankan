<template>
  <div class="main-content">

	<div class="header">
		<ul class="nav-list">
			<li class="nav-item">
				<image class="search-img" src="../../static/images/icon_search_small.png"/>
				<input type="text" class="inputKey"  auto-focus v-model="form.key" @confirm="onsubmit" confirm-type="search"  placeholder="请输入地名进行搜索"  />
				<image class="clear-img" src="../../static/images/icon_delete_circular.png"/>
			</li>			
		</ul>		
	</div>
	
	
	<div class="content">

		<scroll-view v-show="dataType==2" scroll-y>
			<div class="content">

				<ul class="data-list list-left">
					<li class="data-item" v-for="(item,index) in data1" :key="index">
						<image class="data-img" mode="widthFix" :src="item.firstUrl" />
						<p class="data-title">{{item.title?item.title:''}}</p>
						<div class="user-info">
							<div class="user-image">
								<image class="user-img" :src="item.userBases[0].avatar" />
							</div>
							<div class="info-txt">
								<p class="name">{{item.userBases[0].nickName}}</p>
								<p class="creatTime">{{item.updateTime1}}</p>
							</div>
						</div>
					</li>
				</ul>

				<ul class="data-list list-right">
					<li class="data-item" v-for="(item,index) in data2" :key="index">
						<image class="data-img" mode="widthFix" :src="item.firstUrl" />
						<p class="data-title">{{item.title?item.title:''}}</p>
						<div class="user-info">
							<div class="user-image">
								<image class="user-img" :src="item.userBases[0].avatar" />
							</div>
							<div class="info-txt">
								<p class="name">{{item.userBases[0].nickName}}</p>
								<p class="creatTime">{{item.updateTime1}}</p>
							</div>
						</div>
					</li>
				</ul>

				<div class="btn-box">
					<image class="photo-img" src="../../static/images/photo/icon_canmera.png" />
				</div>

			</div>

		</scroll-view>

	</div>

<div class="bar-bottom"></div>

  </div>
</template>

<script>

import {searchUser, searchFriend,addFriend,cancleFriend} from './srevice.js'


export default {

  data () {
    return {
			data1:[],
			data2:[],
			type:1,
			form:{
				key:'',
			}
    }
  },
		onPullDownRefresh() {
			


		}, 
	onShow(){
		this.data = [];
		this.form.key = '';
	},
  onLoad(option){
  	

		
  	
  },
	methods:{
		onsubmit(){
			
				if(!this.form.key) {
					wx.showToast({
						title: '请输入关键字',
						icon: 'none',
					});
					return false;
				};

			
			
		},

		
		handleBrack(){
			
						wx.navigateBack({
						  delta: 1
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
			padding-top: 36px;
			min-height: 100vh;
			background: #F1F1F1;
		}

	.header{
		position: fixed;
		top: 0;
		left: 0;
		background: #fff;
		z-index: 1000;
		height: 36px;
		width: 100%;
		.nav-list{
			width: 100%;
			height: 36px;
			box-sizing: border-box;
			padding: 0 10px;
			.nav-item{
				position: relative;
				width: 100%;
				height: 30px;
				background: #F1F1F1;
				border-radius:100px ;				
				padding:0 30px;
				box-sizing: border-box;
				color: #333;
				.search-img{
					position: absolute;
					z-index: 10;
					height: 14px;
					width: 14px;
					top: 50%;
					margin-top: -7px;
					left: 10px;
				}
				.clear-img{
					position: absolute;
					z-index: 10;
					height: 14px;
					width: 14px;
					top: 50%;
					margin-top: -7px;
					right: 10px;					
				}
				.inputKey{
					margin-top: 2px;	
					height: 32px;
					width: 100%;
					font-size: 12px;
					box-sizing: border-box;	
				}
			}
			
		}
		
	}
	
	
	.content{
		background: #fff;
		height: auto;
		width: 100%;
	}

	.data-list {
		flex: 1;
		height: auto;
		&.list-left {
			padding-right: 5px;
		}
		&.list-right {
			padding-left: 5px;
		}
		.data-item {
			background: #fff;
			box-sizing: border-box;
			width: 100%;
			margin-top: 10px;
			box-shadow: 0 2px 6px -2px rgba(0, 0, 0, .8);
			height: auto;
			float: left;
			.data-title {
				padding: 10px;
				font-size: 16px;
				color: #333;
				text-align: justify;
				line-height: 20px;
			}
			.data-img {
				width: 100%;
				height: auto;
			}
			.user-info {
				padding: 0 10px;
				height: 60px;
				.user-image {
					width: 25%;
					height: 50px;
					float: left;
					.user-img {
						width: 40px;
						height: 40px;
						border-radius: 50%;
					}
				}
				.info-txt {
					width: 75%;
					box-sizing: border-box;
					padding-left: 10px;
					float: left;
					.name {
						width: 100%;
						margin-top: 5px;
						font-size: 12px;
						color: #333;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.creatTime {
						margin-top: 3px;
						font-size: 10px;
						color: #999;
					}
				}
			}
		}
	}
	
	button::after {
		border: none;
	}
	
	button.active {
		opacity: 0.7;
	}
	
</style>
