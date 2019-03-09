<template>
  <div class="main-content" >

	<div class="top-bar">
		<ul class="nav-list">
			<li class="left-btn">
				<image class="icon_search" src="../../static/images/iconset.png"/>
			</li>
			<li class="nav-item">ID:{{userDetail.no}}</li>	
			<li class="right-btn">
					<image class="icon_right" src="../../static/images/icon_map.png"/>
					<image class="icon_right share" src="../../static/images/icon_share.png"/>
			</li>
		</ul>		
	</div>

<scroll-view  scroll-y>
			<div class="header">
				<div class="headerBg">
					
					<image class="bg-image" v-if="!userDetail.background" src="../../static/images/bg_personal2.png"/>
					<image class="bg-image" v-if="userDetail.background" :src="userDetail.background"/>

					
				</div>
				<div class="userInfo">
				<div class="baseInfo">
						<div class="userImg">
							<image class="user-img" v-if="!userDetail.avatar" src="../../static/images/shouq/photo_logo2.png"/>
							<image class="user-img" v-if="userDetail.avatar" :src="userDetail.avatar"/>
						</div>
						<div class="userName">
							<p class="name">{{userDetail.nickName}}
								<image class="sex-img" mode="aspectFit" v-if="userDetail.genderType=='male'" src="../../static/images/icon_boy.png"/>
								<image class="sex-img" mode="aspectFit" v-if="userDetail.genderType=='female'" src="../../static/images/icon_girl.png"/>
							</p>
							<p class="lv">
								<image class="lv-img" mode="aspectFit" v-if="userDetail.level=='freshman' || userDetail.level=='junior'" src="../../static/images/btnphontoer12x.png"/>
								<image class="lv-img" mode="aspectFit" v-if="userDetail.level=='medium'" src="../../static/images/btn_phontoer2x.png"/>
								<image class="lv-img" mode="aspectFit" v-if="userDetail.level=='senior'||userDetail.level=='highest'" src="../../static/images/btn_phontoer3x.png"/>
							</p>
						</div>
						
						<div class="right-box">
								<image class="right-iocn" mode="aspectFit" src="../../static/images/right.png"/>
						</div>
						
					</div>
					<p class="introduce">{{userDetail.summary}}</p>
					<ul class="navList">
						<li class="navItem" v-bind:class="{'active':active==1}" @tap="handelNav(1)" >
							<p class="txt-box" >{{userDetail.dynamicCount}}</p>
							<p class="txt-box" >足迹</p>
						</li>
						<li class="navItem" v-bind:class="{'active':active==2}" @tap="handelNav(2)" >
							<p class="txt-box" >{{userDetail.cityCount}}</p>
							<p class="txt-box" >城市</p>
						</li>
						<li class="navItem" v-bind:class="{'active':active==3}" @tap="handelNav(3)" >
							<p class="txt-box" >{{userDetail.countryCount}}</p>
							<p class="txt-box" >国家</p>						
						</li>
						<li class="navItem" v-bind:class="{'active':active==4}" @tap="handelNav(4)" >
							<p class="txt-box" >{{userDetail.collectCount}}</p>
							<p class="txt-box" >收藏</p>						
						</li>
						<li class="navItem" v-bind:class="{'active':active==5}" @tap="handelNav(5)" >
							<p class="txt-box" >{{userDetail.locationCount}}</p>
							<p class="txt-box" >地点</p>							
						</li>
					</ul>	
	
				</div>
			</div>

	
			<div class="content">
			
					<ul class="data-list list-left">
						<li class="data-item" v-for="(item,index) in data1" :key="index" >
							<image class="data-img" mode="widthFix" :src="item.firstUrl"/>
							<p class="data-title">{{item.content}}</p>	
							<div class="user-info">
								<div class="user-image">
									<image class="user-img" v-if="!userDetail.avatar" src="../../static/images/shouq/photo_logo2.png"/>
									<image class="user-img" v-if="userDetail.avatar" :src="userDetail.avatar"/>									
								</div>
								<div class="info-txt">
									<p class="name">{{userDetail.nickName}}</p>
									<p class="creatTime" v-if="item.updateTime1" >{{item.updateTime1}}</p>
									<p class="creatTime" v-if="item.startTime1" ><span class="label-txt" >From：</span>{{item.startTime1}}</p>
									<p class="creatTime" v-if="item.endTime1" ><span class="label-txt" >To：</span>{{item.endTime1}}</p>
								</div>		
							</div>
						</li>
					</ul>
					
					<ul class="data-list list-right">
						<li class="data-item" v-for="(item,index) in data2" :key="index" >
							<image class="data-img" mode="widthFix" :src="item.firstUrl"/>
							<p class="data-title">{{item.content}}</p>	
							<div class="user-info">
								<div class="user-image">
									<image class="user-img" v-if="!userDetail.avatar" src="../../static/images/shouq/photo_logo2.png"/>
									<image class="user-img" v-if="userDetail.avatar" :src="userDetail.avatar"/>									
								</div>
								<div class="info-txt">
									<p class="name">{{userDetail.nickName}}</p>
									<p class="creatTime" v-if="item.updateTime1" >{{item.updateTime1}}</p>
									<p class="creatTime" v-if="item.startTime1" ><span class="label-txt" >From：</span>{{item.startTime1}}</p>
									<p class="creatTime" v-if="item.endTime1" ><span class="label-txt" >To：</span>{{item.endTime1}}</p>
									
								</div>		
							</div>
						</li>
					</ul>	
			
			
			
				</div>	
			
			
</scroll-view>			
			
			
			
			<div class="bar-bottom"></div>
  </div>
</template>

<script>

import {getUserDetail, getDynamicList, cityList,countryList} from './srevice.js';
import { formatTime } from '@/utils/index.js';
export default {

  data () {
    return {
    		active:1,
    		data1:[],
    		data2:[],
    		isEmpty:false,
				userInfo:{},
				nomore:false,
				userDetail:{},
				form:{
					dynamicId:'',
					isLeast:true
				}
    }
  },

  onLoad(){
  	this.userInfo = mpvue.getStorageSync('userInfo')|| ''
  	if(this.userInfo){
  		
  		this.userInfo = JSON.parse(this.userInfo);
  		this._getUserDetail(this.userInfo.id);
  		this._getDynamicList(this.form,true);
  		
  	}
  	
  },
		onPullDownRefresh() {

	
		},
		onReachBottom() {
			if(!this.nomore){
				if(this.active == 1){
					this._getDynamicList(this.form,false);
				}else if(this.active == 2) {

				} else if(this.active == 3) {

				}
			
			}else{
					wx.showToast({
						title: '没有更多数据啦',
						icon: 'none',
						duration: 2000
					})				
			}		
			

		},  
	methods:{
		handelNav(index){
			
			if(this.active != index){
				this.form.dynamicId = '';
				this.active = index;
				if(index === 1){
						this._getDynamicList(this.form,true);	
				}else if(index === 2){
					
					this._cityList(this.form,true);	
					
				}
				
			}
			
		},
		_getUserDetail(id){
			
			getUserDetail({toUid:id}).then((res)=>{
				
				this.userDetail = res;
				
			}).catch((res)=>{
				
					wx.showToast({
						title: res.message,
						icon: 'none',
						duration: 2000
					})								
			})
			
		},



		_cityList(opt,empty){
			
			let vm = this;
				wx.showLoading({
					title: '加载中',
				})
				
			cityList(opt).then((res)=>{
					if(empty){
						vm.data2 = [];
						vm.data1 = [];
					};

							if(res.length>0){
								vm.nomore = false
							}else{
								vm.nomore = true;			
							}

					res.forEach((item,index)=>{
								item.startTime1 =  formatTime(new Date(item.startTime));
								item.endTime1 =  formatTime(new Date(item.endTime));
								item.startTime1 =  item.startTime1.split(' ')[0];
								item.endTime1 =  item.endTime1.split(' ')[0];								
								
								item.firstUrl = item.url
								if(Math.ceil(index % 2) == 0) {
									vm.data1.push(item)
								} else {
									vm.data2.push(item)
								}										

					})
					if(vm.data2.length==0&&vm.data2.length==0){
						vm.isEmpty = true;
					}
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
		_getDynamicList(opt,empty){
			let vm = this;
				wx.showLoading({
					title: '加载中',
				})
				
			getDynamicList(opt).then((res)=>{
					if(empty){
						vm.data2 = [];
						vm.data1 = [];
					};

							if(res.object.length>0){
								var obj =  res.object[res.object.length-1];
								if(obj.dynamics.length > 0){
									vm.form.dynamicId = obj.dynamics[obj.dynamics.length-1].id;
									vm.nomore = false
								}else if(res.object[0].dynamics.length == 0){				
									vm.nomore = true;			
								};				
							}else{
								vm.nomore = true;			
							}

					
					res.object.forEach((item)=>{
							item.dynamics.forEach((item1,index)=>{
								item1.updateTime1 =  formatTime(new Date(item1.updateTime));
								if(Math.ceil(index % 2) == 0) {
									vm.data1.push(item1)
								} else {
									vm.data2.push(item1)
								}										
							})
					})
					if(vm.data2.length==0&&vm.data2.length==0){
						vm.isEmpty = true;
					}
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
		
		
		
	}
}
</script>

<style lang="scss" scoped >

		.main-content{
			position: relative;
			height: auto;
			width: 100%;
			box-sizing: border-box;
			padding-top: 36px;
			min-height: 100vh;
			background: #F1F1F1;
		}

	.top-bar{
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
					margin-left: 25px;
					&.share{
						margin-top: 9px;
					}				
			}
			
			.nav-item{
				flex: 4;
				text-align: center;
				line-height: 36px;
				font-size: 14px;
				color: #333;
			}
			
		}
		
	}


.header{
	position: relative;
	height: auto;
	padding-top: 130px;
	box-sizing: border-box;
	background: #F1F1F1;
}




.header .headerBg{
	position: absolute;
	top: 0;
	z-index: 1;
	height: 200px;
	width: 100%;
	.bg-image{
		width: 100%;
		height: 200px;
	}
}

.header .userInfo{
	z-index: 5;
	position: relative;
	width: 360px;
	box-sizing: border-box;
	padding: 0.3rem;
	background: #FFFFFF;
	border-top-left-radius:6px;
	border-top-right-radius:6px;
	min-height: 3rem;
	height: auto;
	margin: auto;
	box-shadow: 0 4px 11px -1px #CCCCCC;
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
}
 .foll-btn .icon{
	height: 26px;
	padding-left: 15px;
	display: inline-block;
	width: auto;
}



 .foll-btn.fllowed{
	background: #fcf0f3;
	border-color:#fcf0f3 ;
	color: #FD5B42;
}






.header .userInfo .baseInfo{
	position: relative;
	display: flex;
	height: 1.3rem;
	.right-box{
		position: absolute;
		height: 60px;
		width: 60px;
		top:20px;
		right:0;
		.right-iocn{
			float: right;
			height: 20px;
			width: 18px;
		}
	}
}

.header .userInfo .sexImage{
	width: 0.6rem;
	height: 0.6rem !important;
	margin: 0 !important;
	
}

.header .userInfo .baseInfo .userImg{
	flex: 0 0 60px;
	text-align: center;
} 
.header .userInfo .baseInfo .userImg .user-img{
	float: left;
	margin-top: 10px;
	height: 50px;
	width: 50px;
	border-radius:100px;
}
.header .userInfo .baseInfo .userName{
	flex: 1;
	box-sizing: border-box;
	padding-left: 0.3rem;
	padding-top: 10px;
	.name{
		position: relative;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding-right: 20px;
	}
	
	.sex-img{
		height: 14px;
		width: 14px;
	}
}
.header .userInfo .baseInfo .userName .lv{
	height: 0.65rem;
	line-height: 0.65rem;
	font-size: 14px;
	width: 70%;
	font-weight: bold;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.header .userInfo .baseInfo .userName .lv-img{
	width: 60px;
	height: 20px;
}

.header .userInfo .introduce{
	line-height: 18px;
	margin-top: 0.1rem;
	font-size: 12px;
	color: #666666;
	display: -webkit-box;
	padding-bottom: 0.1rem;
	border-bottom:1px solid #CCCCCC;
	text-align: justify;	
}
.header .navList{
	display: flex;
	height: 60px;
	text-align: center;
}
.header .navList .navItem{
	flex: 1;
	box-sizing: border-box;
	position: relative;
	padding-top: 10px;
}
.header .navList .navItem .txt-box{
	color: #333333;
	height: 20px;
	line-height: 20px;
	font-weight: bold;
	font-size: 12px;
}
.header .navList .navItem.active .txt-box{
	color: #FF5B40;
}
.header .navList .navItem.active::before{
	content: '';
	height: 2px;
	width: 40px;
	position: absolute;
	bottom: 8px;
	left: 50%;
	margin-left: -20px;
	background: #FF5B40;
}


	.content{
		padding: 8px;
		padding-top:0;
		box-sizing: border-box;
		height: auto;
		display: flex;
		height: auto;
		width: 100%;
	}

	.data-list{
		flex: 1;
		height: auto;
		&.list-left{
			padding-right: 5px;
		}
		&.list-right{
			padding-left: 5px;
		}
		.data-item{
			background: #fff;
			box-sizing: border-box;
			width: 100%;
			margin-top: 10px;
			box-shadow: 0 2px 6px -2px rgba(0,0,0,.8);
			height: auto;
			float: left;
			.data-title{
				padding: 10px;
				font-size: 16px;
				color: #333;
				line-height: 20px;
			}
			.data-img{
				width: 100%;
				height: auto;
			}
			.user-info{
				padding:0 10px;
				height: 60px;
				.user-image{
					width: 25%;
					height: 50px;
					float: left;
					.user-img{
						width: 40px;
						height: 40px;
						border-radius:50%;
					}
				}
				.info-txt{
					width: 75%;
					box-sizing: border-box;
					padding-left: 10px;
					float: left;
					.name{
						width: 100%;
						margin-top: 5px;
						font-size: 12px;
						color: #333;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.creatTime{
						margin-top: 3px;
						font-size: 10px;
						color: #999;
						.label-txt{
							display: inline-block;
							width: 36px;
							text-align: right;
						}
					}
				}
			}
		}
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
	

</style>
