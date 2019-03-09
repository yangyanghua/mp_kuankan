<template>
  <div class="main-content">

	<div class="header">
		<ul class="nav-list">
			<li class="left-btn">
				<image class="icon_search" src="../../static/images/icon_search.png"/>
			</li>
			<li class="nav-item" v-bind:class="{'active':active == 1}" @tap="handleNav(1)" >我关注的({{meFollow}})</li>
			<li class="nav-item" v-bind:class="{'active':active == 2}" @tap="handleNav(2)" >关注我的({{followMe}})</li>
			<li class="right-btn">
					<image class="icon_right" src="../../static/images/icon_addfriend.png"/>
			</li>
		</ul>		
	</div>
	
	
	<div class="content">

			<div class="fans" >
				<ul class="fansList">
					<li class="fansItem" v-for="(item,index) in data" :key="index" >
						<div class="fansImage"><image class="user-img" :src="item.avatar"/></div>
						<div class="fansInfo">
							<p class="fansName">{{item.nickName}}</p>
							<p class="userNo" >快看ID：{{item.no}}</p>
						</div>
						<button class="foll-btn btnA" v-if="item.userFollowState=='two'" @tap="_cancleFriend(item.id)"  hover-class="active"  ><image class="icon" src="../../static/images/icon_guanzhu.png"/>相互关注</button>
						<button class="foll-btn btnA" v-if="item.userFollowState=='to'" @tap="_cancleFriend(item.id)" hover-class="active"  ><image class="icon" src="../../static/images/gou.png"/>已关注</button>
						<button class="foll-btn btnB" v-if="item.userFollowState=='from'" @tap="_addFriend(item.id)"    hover-class="active" ><image class="icon" src="../../static/images/jia.png"/>关注</button>
					</li>		
				</ul>
			</div>	

	</div>

<div class="bar-bottom"></div>

  </div>
</template>

<script>

import {fansList, followFansList, addFriend, cancleFriend} from './srevice.js'


export default {

  data () {
    return {
			data:[],
			followMe:0,
			meFollow:0,
			active:2,
    }
  },
		onPullDownRefresh() {
			if(this.active == 1) {
					this._followFansList();
			} else {
					this._fansList();
			}

		},  
  onLoad(){
  	
  	this._fansList();
  	this._followFansList();
  	
  },
	methods:{
		
		
		handleNav(index){
			if(this.active==index){
				return false;
			}else{
				this.active = index
				if(index == 1) {
						this._followFansList();
				} else {
						this._fansList();
				}				
			}

		},
		_cancleFriend(id){

			cancleFriend({followedUserId:id}).then((res)=>{

					wx.showToast({
						title: '取消关注成功',
						icon: 'none',
						duration: 2000
					})	

						this._followFansList();
						this._fansList();
			}).catch((res)=>{

					wx.showToast({
						title: res.message,
						icon: 'none',
						duration: 2000
					})	
				
			})

		},
		_addFriend(id){
			
			addFriend({applicantUserid:id}).then((res)=>{

					wx.showToast({
						title: '关注成功',
						icon: 'none',
						duration: 2000
					})	
						this._followFansList();
						this._fansList();
			}).catch((res)=>{

					wx.showToast({
						title: res.message,
						icon: 'none',
						duration: 2000
					})	
				
			})
			
		},
		_followFansList(){
				wx.showLoading({
					title: '加载中',
				})			
			followFansList().then((res)=>{
				if(this.active==1){
					this.data = res;
				}
				this.meFollow = res.length;  
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
			
			
			
		},
		_fansList(){
				wx.showLoading({
					title: '加载中',
				})			
			fansList().then((res)=>{
					
				if(this.active==2){
					this.data = res;
				}
				this.followMe = res.length;  
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
			padding-top: 36px;
			min-height: 100vh;
			background: #fff;
		}

	.header{
		position: fixed;
		top: 0;
		left: 0;
		background: #fff;
		z-index: 100;
		height: 36px;
		width: 100%;
		.nav-list{
			width: 100%;
			height: 36px;
			box-sizing: border-box;
			padding: 0 10px;
			display: flex;
			.left-btn,.right-btn{
				flex: 2;

			}
			.icon_search{
					float: left;
					margin-top: 8px;
					height: 20px;
					width: 20px;
				}			
			.icon_right{
					float:right;
					margin-top: 8px;
					height: 20px;
					width: 20px;				
			}
			
			.nav-item{
				position: relative;
				flex: 4;
				text-align: center;
				line-height: 36px;
				font-size: 14px;
				color: #333;
				&.active {
					color: #FF5B40;
				}
				&.active::after {
					position: absolute;
					content: '';
					height: 2px;
					width: 70px;
					bottom: 5px;
					background: #FF5B40;
					left: 50%;
					margin-left: -35px;
				}				
			}
			
		}
		
	}
	
	
	.content{
		border-top:10px solid #F1F1F1 ;
		background: #fff;
		height: auto;
		width: 100%;
	}

.fansList .fansItem{
	position: relative;
	display: flex;
	height: 70px;
	background: #FFFFFF;
	padding: 10px;
	box-sizing: border-box;
	margin-bottom: 10px;
}
.fansList .fansItem .fansImage{
	flex: 0 0 50px;
}
.fansList .fansItem .fansImage .user-img{
	float: left;
	margin-top: 5px;
	height: 40px;
	width: 40px;
	border:3px solid #FFFFFF;
	border-radius:100px;
	background-size:cover;
	box-shadow: 0 5px 10px 0px #CCCCCC;
}

.fansList .fansItem .fansInfo{
	flex:1;
	box-sizing: border-box;
	padding-left: 10px;
}

.fansList .fansItem .fansInfo .fansName{
	height: 30px;
	line-height: 40px;
	font-weight: bold;
	font-size: 12px;
	color: #333333;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}


.fansList .fansItem .fansInfo .userNo{
	
	height: 30px;
	line-height: 20px;
	font-size: 12px;
	color: #333333;
	width: 100%;	
	
}

 .foll-btn{
	position: absolute;
	top: 20px;
	background: #FD5B42;
	color: #fff;
	padding-top: 0;
	padding-bottom: 0;
	height: 26px;
	line-height: 26px;
	border-color:#FD5B42;
	font-size: 12px;
	right: 10px;
	min-width: 80px;
	z-index: 100;
	&.btnA{
		color: #ff5b40;
		background: #fcf0f3;
	}
	&.btnB{
		color: #fff;
		background: #ff5b40;
	}
}
 .foll-btn .icon{
 	position: relative;
 	top: 2px;
	height: 12px;
	width: 14px;
	margin-right: 2px;
}
	
	.bar-bottom{
		position: fixed;
		bottom: 0;
		left: 0;
		height: 1px;
		width: 100%;
		z-index: 1000;
		box-shadow: 0 0 10px 0 rgba(0,0,0,.8);
	}
	
	button::after {
		border: none;
	}
	
	button.active {
		opacity: 0.7;
	}
	
</style>
