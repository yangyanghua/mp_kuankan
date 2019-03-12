<template>
  <div class="main-content">

	<div class="header">
		<ul class="nav-list">
			<li class="nav-item">
				<image class="search-img" src="../../static/images/icon_search_small.png"/>
				<input type="text" class="inputKey"  auto-focus v-model="form.key" @confirm="onsubmit" confirm-type="search"  placeholder="请输入好友昵称"  />
			
			</li>
			<li class="nav-btn">
					<button class="btn-colse"hover-class="active" @tap="handleBrack"  >取&nbsp;&nbsp;消</button>
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
						<button class="foll-btn btnB" v-if="item.userFollowState=='from'||item.userFollowState=='none'" @tap="_addFriend(item.id)"    hover-class="active" ><image class="icon" src="../../static/images/jia.png"/>关注</button>

					</li>		
				</ul>
			</div>	

	</div>

<div class="bar-bottom"></div>

  </div>
</template>

<script>

import {searchUser, searchFriend,addFriend,cancleFriend} from './srevice.js'


export default {

  data () {
    return {
			data:[],
			type:1,
			form:{
				key:'',
			}
    }
  },
		onPullDownRefresh() {
			
			this.onsubmit();

		}, 
	onShow(){
		this.data = [];
		this.form.key = '';
	},
  onLoad(option){
  	
		this.type = option.type
		
  	
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
				wx.showLoading({
					title: '加载中',
				})					
				if(this.type==1){

					this._searchFriend();
					
				}else{
					this._searchUser();
				}
				
			
			
		},
		_searchUser(){
				searchUser(this.form).then((res)=>{
				this.data = res;
				wx.hideLoading();
				wx.stopPullDownRefresh();					
				}).catch((res)=>{
				wx.hideLoading();
				wx.stopPullDownRefresh();					
					wx.showToast({
						title: res.message,
						icon: 'none',
					});					
					
				})			
		},
		_searchFriend(){
			
				searchFriend(this.form).then((res)=>{
				this.data = res;
				wx.hideLoading();
				wx.stopPullDownRefresh();					
				}).catch((res)=>{
				wx.hideLoading();
				wx.stopPullDownRefresh();					
					wx.showToast({
						title: res.message,
						icon: 'none',
					});					
					
				})
		},
		_cancleFriend(id){

			cancleFriend({followedUserId:id}).then((res)=>{

					wx.showToast({
						title: '取消关注成功',
						icon: 'none',
						duration: 2000
					})	

				if(this.type==1){

					this._searchFriend();
					
				}else{
					this._searchUser();
				}
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
					if(this.type==1){
	
						this._searchFriend();
						
					}else{
						this._searchUser();
					}
			}).catch((res)=>{

					wx.showToast({
						title: res.message,
						icon: 'none',
						duration: 2000
					})	
				
			})
			
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
			background: #fff;
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
			position: relative;
			width: 100%;
			height: 36px;
			box-sizing: border-box;
			padding: 0 10px;
			padding-right: 60px;
			.nav-btn{
				position: absolute;
				height: 36px;
				width: 60px;
				bottom: 3px;
				right: 0;
				.btn-colse{
					height: 36px;
					line-height: 36px;
					width: 50px;
					text-align: center;
					float: left;
					font-size: 12px;
					color: #FF5B40;
					background: none;
					outline: none;
				}
			}
			.nav-item{
				position: relative;
				width: 100%;
				height: 30px;
				background: #F1F1F1;
				border-radius:100px ;				
				padding-left: 30px;
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
