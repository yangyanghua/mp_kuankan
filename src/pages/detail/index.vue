<template>
  <div class="main-content" v-bind:class="{'flex':starsShow}" >

	<div class="header">
		<ul class="nav-list">
			<li class="left-btn">
				
				<button class="share-btn" open-type="share"   hover-class="active" >
						<image class="icon_search" src="../../static/images/icon_share.png"/>
				</button>				
				

			</li>
			<li class="nav-item">详情</li>
			<li class="right-btn">
					<image class="icon_right" @tap="handleTapMore" src="../../static/images/icon_more.png"/>
					<image class="icon_right" src="../../static/images/icon_map.png"/>
			</li>
		</ul>		
	</div>

			<div class="banner" >
				<image class="banner-bg" v-if="!detail.firstUrl" src="../../static/images/bg_personal2.png"/>
				<image class="banner-bg" v-if="detail.firstUrl" :src="detail.firstUrl"/>
				
				
				<div class="Dynpublisher">
					<div class="portrait">
						<image class="user-img" v-if="user.avatar"  :src="user.avatar"/>
					</div>
					<div class="nameInfo">
						<p class="DynpublisherName"><span id="DynpublisherName">{{user.nickName}}</span></p>
					</div>
				</div>
				<div class="scorecontent" @tap="addScore" >
					<p class="score-p score-title" >评分</p>
					<p class="score-p scoreP"><span class="score">{{detail.score}}</span>/10</p>
					<p class="score-p" ><span  class="numberOfscores">{{detail.scoreCount}}</span>人</p>
				</div>
			</div>

			<div class="travelContent">
				<h1 class="traveltitle" v-if="detail.title" >{{detail.title}}</h1>
				<p class="secondary">
					<span class="releaseTime">发表于&nbsp;2018-12-12 12:30</span>
					<label class="label-txt"> <span class="viewed" style="margin-right: 0;"> <image class="icon_left" src="../../static/images/icon_look2x.png"/>&nbsp;{{detail.readCount}}</span>次</label>
				</p>
				<ul class="viaNav">
					<li class="viaNav-item" ><span class="tujing"><image class="icon_left" src="../../static/images/icon_pathway2x.png"/>&nbsp;途经</span></li>
					<li class="viaNav-item" ><span class="passCity">{{detail.cityCount}}</span>个城市</li>
					<li class="viaNav-item" >历时<span class="usDay">{{detail.days}}</span>天</li>
				</ul>
				<div class="cityList">


				<swiper class="swiper-content" display-multiple-items="3.5" >
				 
				   <block v-for="(item,index) in detail.cityVos" :key="index" >
				    <swiper-item>
				      <div class="swiper-slide" v-if="item" ><p class="date">{{item.time1}}</p><p class="cityname">{{item.cityName}}</p><span class="line"></span></div>
				    </swiper-item>
				  </block>
				  
				</swiper>

					<image class="map_bg"  src="../../static/images/photomap2x.png"/>
				</div>	
			</div>

	
	<div class="content">

				<div class="dynamicContent">
				<p class="dect" v-if="detail.content" >{{detail.content}}</p>					
					<ul class="dynamicList">

						<li class="dynamicItem" v-for="(item,index) in detail.photos" :key="index" >
							<!--<a class="downImage">  <image class="icon_download" src="../../static/images/icon_download2x.png"/> </a>-->
							<p class="dateInfo">
								<span class="itemIndex">{{index+1}}/{{detail.photos.length}}</span>
								<span class="tiem">拍摄于{{item.photographTime1}}</span>
								<div class="dynamicImg">
									<image class="dynamicImage" mode="widthFix" :src="item.photoUrl" />
								</div>
								<p class="address"><span class="addressIcon"><image class="icon_left" src="../../static/images/icon_position2x.png"/></span>{{item.countryName+'.'+item.stateName+'.'+item.cityName}}{{item.town?'.'+item.town:''}}{{item.locationName?'.'+item.locationName:''}} <span v-if="item.altitude||item.altitude==0">（海拔{{item.altitude}}米）</span></p>
							</p>
							<p class="dynamicTxt" v-if="item.txt" >{{item.txt}}</p>
						</li>
					</ul>	
				</div>	


				<div class="commentsContent">
					<div class="giveALike">
					  <div class="zan">
					  	
					  	<image class="icon_zan" src="../../static/images/icon_praise_pre2x.png"/>
					  	
					  </div>
					  <div class="zanUser">
					  	<ul class="userList">
								<li class="userItem" v-for="(item,index) in detail.applauds" :key="index" ><image class="icon_user" :src="item.user.avatar"/></li>
					  	</ul>
					  </div>
					  <div class="more" id="loadmoreZan">
					  		<image class="icon_more" src="../../static/images/icon_more2.png"/>
					  </div>
					</div>
					<div class="commentsListContent">
						<ul class="commentsList">

						<li class="commentsItem" v-for="(item,index) in detail.comments" :key="index" >
								<div class="userPortrait">
									<image class="icon_user" v-if="item.user.avatar"  :src="item.user.avatar"/>
									<image class="icon_user" v-if="!item.user.avatar" src="../../static/images/shouq/photo_logo2.png"/>
									
								</div>
								<div class="commentsTxt">
								<p class="commentInfo">
									<span class="userName">{{item.user.nickName}}</span>
									
									<span class="date">{{item.createTime1}}</span>
								</p>	 
								<p class="commentContent">
								  <span v-if="item.type==3">@<span class="name"  >{{item.toUser.nickName}}</span>：</span>
								 	{{item.content}}
								</p>
								<button class="reCommentBnt" hover-class="active" @tap="handelReply(item.user)" >回复</button>
								</div>								
							</li>							
						
							
						</ul>
					</div>
					<div class="loadMore">
						<p class="loadMoreBtn">查看更多评论  <image class="moreIcon" src="../../static/images/icon_next2x.png"/></p>
					</div>
	
				</div>	

			
			<div class="footer" v-if="!isReply" >
				
				<ul class="footerLsit">
	 				<li class="f-item  comInput">
	 					<input  class="inputs" v-model="form.content" confirm-type="done" @confirm="sendComment"  placeholder="请输入评论" />
	 					<image class="icons-edit" src="../../static/images/edit2x.png"/>
					</li> 				
	 				<li class="f-item comTotality">
	 					<image class="icons" src="../../static/images/icon_comments2x.png"/>
						<p class="numer-box">{{detail.commentCount}}</p>
					</li>
					<li class="f-item colTotality">
						<image class="icons" v-if="!detail.isCollection" @tap="_collection"  src="../../static/images/icon_collect2x.png"/>
						<image class="icons" v-if="detail.isCollection" @tap="_collectionCancle" src="../../static/images/collect_press.png"/>
						<p class="numer-box">{{detail.collectionCount}}</p>
					</li>
					<li class="f-item zanTotality">
						<image class="icons" v-if="!detail.isApplaud" @tap="_goodAdd" src="../../static/images/icon_praise2x.png"/>
						<image class="icons" v-if="detail.isApplaud" @tap="_cancleAdd" src="../../static/images/icon_praise_pre2x.png"/>
						<p class="numer-box">{{detail.likeCount}}</p>
					</li>
				</ul>				
				
			</div>


			<div class="footer" v-if="isReply" >
				<ul class="footerLsit">
	 				<li class="f-item  comInput">
	 					<input  class="inputs" v-model="form.content" confirm-type="done" @confirm="sendComment"  :placeholder="'@'+replyUser.nickName" />
	 					<image class="icons-edit" src="../../static/images/edit2x.png"/>
					</li> 				
					<li class="f-item close" @tap="colseReply" >
						取&nbsp;&nbsp;消
					</li>
				</ul>				
			</div>



			<div class="stars" v-bind:class="{'active':starsShow}" >
				<div class="maker"></div>
			
			<div class="stars-content">
					<h2 class="sTitle"><span class="sColse" @tap="closeStarBox" >×</span>评分</h2>
					<p class="scoreNum">{{scoreNum}}</p>
					<div class="starsListContent">
						<ul class="starsList">
							<li class="star" v-for="item in 10" @tap="star(item)" :key="item" >
								<image class="icon_star" v-if="scoreNum < item+1" src="../../static/images/icon_score.png"/>
								<image class="icon_star" v-if="scoreNum >= item+1" src="../../static/images/icon_score_press.png"/>
							</li>
						</ul>
					</div>
					<p class="instructions">*评分确定后无法修改</p>
					<button class="sSubmitbtn" hover-class="active" @tap="submitScore" >确认评分</button>				
			</div>
			</div>			
	</div>


  </div>
</template>

<script>
import {getDetail,goodAdd,cancleAdd,collection,collectionCancle,commentAdd,score} from './srevice.js'
import {formatTime} from '@/utils/index.js'
export default {

  data () {
    return {
      starsShow:false,
      scoreNum:0,
      user:{},
      isReply:false,
      replyUser:{},
      form:{
      	dynamicId:'',
      	content:'',
      	toUid:''
      },
      id:'',
      detail:{cityVos:[],photos:[],applauds:[]}
    }
  },
	onPullDownRefresh() {
			this._getDetail(this.id);
		},    
  onLoad(){
  	this.id = '64';
  	this.form.dynamicId = '64';
  	this._getDetail(this.id);
  	
  },
	onShareAppMessage: function() {
			let title = this.detail.title?this.detail.title:'快看，跟我一起看真实的世界';
			let url  = this.detail.firstUrl?this.detail.firstUrl:'/static/images/photo_01.png';
			return {
				title:title,
				desc: '',
				path: '/pages/detail/main?id='+this.id, // 路径，传递参数到指定页面。
				imageUrl: url 
			}
		},  
  methods:{
  	handelReply(user){
  		this.isReply = true;
  		this.replyUser = user;
  	},
  	colseReply(){
  		this.isReply = false;
  	},
  	handleTapMore(){
			wx.showActionSheet({
			  itemList: ['举报'],
			  success(res) {
			    console.log(res.tapIndex)
			  },
			  fail(res) {
			    console.log(res.errMsg)
			  }
			})  		
  	},
  	submitScore(){

  		if(this.scoreNum<=0){
					wx.showToast({
						title: '请选择分数',
						icon: 'none',
						duration: 2000
					})
					return false;
  		}
  		score({dynamicId:this.id,score:this.scoreNum}).then((res)=>{
					wx.showToast({
						title: '评分成功',
						icon: 'none',
						duration: 2000
					})
					this.starsShow = false;
					this._getDetail(this.id);  	  			
  		}).catch((res)=>{
					wx.showToast({
						title: res.message,
						icon: 'none',
						duration: 2000
					})  			
  		})
  		
  	},
  	
  	star(index){
  		this.scoreNum = index;
  	},
  	closeStarBox(){
  		this.starsShow = false;
  	},
  	addScore(){
  		if(this.detail.isScore){
					wx.showToast({
						title: '您已经评过分啦',
						icon: 'none',
						duration: 2000
					})
					return false;  			
  		}
  		this.starsShow = true;
  		
  	},
  	sendComment(){
  		if(!this.form.content){
					wx.showToast({
						title: '请输入评论内容',
						icon: 'none',
						duration: 2000
					})
					return false;
  		}
  		if(this.isReply){
  			this.form.toUid = this.replyUser.id;
  		}else{
  			this.form.toUid = '';
  		}
  		commentAdd(this.form).then((res)=>{
					wx.showToast({
						title: '评论成功',
						icon: 'none',
						duration: 2000
					})
					this.isReply = false;
					this._getDetail(this.id);  			
  		}).catch((res)=>{
  			
					wx.showToast({
						title: res.message,
						icon: 'none',
						duration: 2000
					})	    			
  			
  		})  		
  	},
  	_collection(){
  		let opt = {dynamicId:this.id};
  		collection(opt).then((res)=>{
					wx.showToast({
						title: '收藏成功',
						icon: 'none',
						duration: 2000
					})
					this._getDetail(this.id);  			
  		}).catch((res)=>{
  			
					wx.showToast({
						title: res.message,
						icon: 'none',
						duration: 2000
					})	    			
  			
  		})
  		
  	},

  	_collectionCancle(){
  		let opt = {dynamicId:this.id};
  		collectionCancle(opt).then((res)=>{
					wx.showToast({
						title: '取消成功',
						icon: 'none',
						duration: 2000
					})
					this._getDetail(this.id);  			
  		}).catch((res)=>{
  			
					wx.showToast({
						title: res.message,
						icon: 'none',
						duration: 2000
					})	    			
  			
  		})
  		
  	},

  	_cancleAdd(){
  		let opt = {
  			dynamicId:this.id
  		}
  		cancleAdd(opt).then((res)=>{
					wx.showToast({
						title: '取消成功',
						icon: 'none',
						duration: 2000
					})
					this._getDetail(this.id);
  			
  		}).catch((res)=>{
					wx.showToast({
						title: res.message,
						icon: 'none',
						duration: 2000
					})	  			
  		})
  		
  	},
  	_goodAdd(){
  			let opt = {
  				dynamicId:this.detail.id,
  				toUid:this.detail.uid	
  			}
  			goodAdd(opt).then((res)=>{
					wx.showToast({
						title: '点赞成功',
						icon: 'none',
						duration: 2000
					})
					this._getDetail(this.id);
  			}).catch((res)=>{
  				
					wx.showToast({
						title: res.message,
						icon: 'none',
						duration: 2000
					})	  				
  				
  			})
  		
  	},
  	_getDetail(id){
 				wx.showLoading({
					title: '加载中',
				})	 		
  		getDetail({id:id,lang:'zh-CN'}).then((res)=>{
  					let vm = this;
  					res.cityVos.forEach((item)=>{
  						let a = formatTime(new Date(item.time));
  						item.time1 = a.split(' ')[0]
  					})
  					if(res.cityVos.length < 4){
  						res.cityVos.length = 4
  					}
  					res.userBases.forEach((item)=>{
  						if(item.id == res.uid ){
  							vm.user = item;
  						}
  					})
  					
  					res.photos.forEach((item)=>{
  						item.photographTime1 = formatTime(new Date(item.photographTime));
  					})
  					
  					res.applauds.forEach((item)=>{
  						
	  					res.userBases.forEach((item1)=>{
	  						if(item.uid == item1.id ){
	  							item.user = item1;
	  						}
	  					})  						
  						
  					})
  					res.comments.forEach((item)=>{
  						item.createTime1  =  formatTime(new Date(item.createTime));
	  					res.userBases.forEach((item1)=>{
	  						if(item.uid == item1.id ){
	  							item.user = item1;
	  						}
	  						if(item.toUid == item1.id){
	  							item.toUser = item1;
	  						}
	  					})  						
  						
  					})  					
  					
  					
  					this.detail = res;
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
			background: #fff;
			&.flex{
				height: 100vh;
				overflow: hidden;
			}
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
			.share-btn{
				width: 40px;
				padding: 0;
				height: auto;
				width: auto;
				background: none;
			}
			.icon_search{
					float: left;
					margin-top: 8px;
					height: 20px;
					width: 20px;
				}			
			.icon_right{
					float:right;
					margin-left: 15px;
					margin-top: 8px;
					height: 20px;
					width: 20px;				
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

.banner{
	position: relative;
	height:290px;
	width: 100%;
	background-repeat:no-repeat ;
	background-position:50% 0 ;
	background-size:cover ;
	.banner-bg{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		height: 240px;
		width: 100%;
	}
}


.banner .Dynpublisher{
	display: flex;
	position: absolute;
	background: none;
	bottom: 15px;
	height: 60px;
	width: 7rem;
	z-index: 5;
}
.banner .Dynpublisher .portrait{
	flex: 0 0 80px;
}
 .banner .Dynpublisher .portrait .user-img{
 	height: 50px;
 	width: 50px;
 	border-radius:100%;
 	margin-top: 0.15rem;
 	margin-left: 0.3rem;
	box-shadow: 0 4px 14px -2px rgba(0,0,0,.7);
 
 }
  .banner .Dynpublisher .nameInfo{
  	flex: 1;
  	padding-top: 0.3rem;
  }
  .banner .Dynpublisher .nameInfo .DynpublisherName{
  	font-size: 14px;
  	color: #333333;
  	height: 19px;
  	margin-top: 0.3rem;
  	line-height: 21px;
  	margin-bottom: 0.1rem;
  }	
  #DynpublisherName{
  	max-width:3.9rem;
  	width: auto;
  	float: left;	
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    margin-right: 10px;
    font-weight: 600;	
  }
  
  .banner .Dynpublisher .nameInfo .DynpublisherName .sex{	
   display: none;
 	float: left;
  	width: 20px;
  	height: 20px;
  	
  }
   .banner .Dynpublisher .nameInfo .DynpublisherName .boy{
		display: none;
 	
  	} 
   .banner .Dynpublisher .nameInfo .DynpublisherName .girl{

  	} 
  .banner .Dynpublisher .nameInfo .level{
  	display: none;
	  	width: 1.2rem;
	  	height: 0.3rem;
  }

.banner .scorecontent{
	overflow: hidden;
	position: absolute;
	background: #fff;
	bottom: 0;
	height: 1.52rem;
	width: 1.7rem;
	right: 0.3rem;
	z-index: 5;
	border-radius:5px;
	text-align: center;
	box-shadow:0 2px 7px -1px #999;	
}
.banner .scorecontent .score-p{
	font-size: 12px;
	color: #333333;
	margin: 0;
	height: 0.47rem;
	line-height: 0.47rem;
	text-align: center;
}
 .banner .scorecontent .scoreP .score{
 	color: #ff5b42;
 	font-size: 16px;
 	font-weight: bold;
 }



.travelContent{
	background: #FFFFFF;
	padding: 10px;
	padding-top:20px;
}
.travelContent .traveltitle{
	font-size: 0.5rem;
	color: #333333;
	line-height: 0.7rem;
}



.travelContent .secondary{
	margin: 10px 0;
	font-size: 12px;
	color: #666666;
	.viewed{
		margin-left: 20px;
	}
	.label-txt{
		color: #333;
	}
	.icon_left{
		height: 10px;
		width: 18px;
	}
}


.travelContent .viaNav{
	height: 30px;
	line-height: 30px;
	width: 100%;
	display: flex;
}
.travelContent .viaNav .viaNav-item{
	flex: 1;
	font-size: 14px;
	color: #000000;
}
.travelContent .viaNav .viaNav-item:nth-child(1){
	text-align: left;
}
.travelContent .viaNav .viaNav-item:nth-child(2){
	text-align: center;
}
.travelContent .viaNav .viaNav-item:nth-child(3){
	text-align: right;
}
.travelContent .viaNav .viaNav-item .tujing .icon_left{
	position: relative;
	top: 2px;
		height: 14px;
		width: 14px;
}


.travelContent .cityList{
	position: relative;
	height: 90px;
	z-index: 10;
	width: 100%;
	.map_bg{
		position: absolute;
		height: 90px;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 1;
	}
}
.swiper-content{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 90px;
	background:none;
	z-index: 20;
}
 .swiper-slide{
 	background: none;
	position: relative;
	border-top:1px  solid #FFFFFF;
	height: 90px;
	text-align: center;
	font-size: 12px;
	color: #666666;
	z-index: 10; 
}
 .swiper-slide .cityname{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		margin-top: 16px;	
}



 .swiper-slide .date{
	margin-top: 20px;
	font-size: 11px;
}

 .swiper-slide .line{
	position: absolute;
	display: block;
	width: 100%;
	border-top: 1px dashed #999999;
	margin-top: -1px;
	top: 50%;
	left: 0;
}
.swiper-slide .line::after{
	position: absolute;
	content: '';
	display: block;
	height:8px;
	width: 8px;
	top: 50%;
	left: 50%;
  margin-top: -4px;
  margin-left: -4px;	
	border-radius:100%;
	background: #ff3843;
}

	
	
	.content{
		background: #fff;
		height: auto;
		width: 100%;
	}



.dynamicContent{
margin-top: 8px;
background: #fff;	
}
 .dect{
 	width: 95%;
 	margin: auto;
 	background: #fff;
	font-size: 14px;
	color: #000;
	line-height: 20px;
	padding:20px 0;
	padding-top: 0;
	margin-bottom: 0;
	border-bottom: 1px solid #999999;
}	
.dynamicContent .dynamicList{
	border-top:1px solid #FFFFFF ;
	padding: 0 0.3rem;
	background: #FFFFFF;
}
.dynamicContent .dynamicList .dynamicItem{	
	position: relative;
	border-bottom: 1px solid #999999;
	padding-bottom: 8px;	
		
}
.dynamicContent .dynamicList .dynamicItem .downImage{
	position: absolute;
	display: block;
	height: 0.6rem;
	bottom:70px;
	right: 0;
	width: 1rem;
	height: 1rem;
	z-index: 6;
	.icon_download{
		height: 30px;
		width: 30px;
	}
}
.dynamicContent .dynamicList .dynamicItem .dateInfo{
	height:30px;
	line-height: 48px;
	font-size: 12px;
	color: #999999;
}
.dynamicContent .dynamicList .dynamicItem .itemIndex{
	float: left;
	height: 21px;
	line-height: 21px;
	padding: 0 9px;
	color: #999;
	margin-top: 14px;
}
.dynamicContent .dynamicList .dynamicItem .tiem{
	float: right;
}
.dynamicContent .dynamicList .dynamicItem  .dynamicImg{
	position: relative;
	z-index: 5;
	overflow: hidden;
	width: 100%;
	height:auto;
	overflow: hidden;
	background-position:50% 50%;
	background-repeat:no-repeat ;	
}
.dynamicContent .dynamicList .dynamicItem  .dynamicImg .dynamicImage{
	width: 100%;
	height: auto;
	border-radius:6px ;	
}
.dynamicContent .dynamicList .dynamicItem .address{
	font-size: 12px;
	line-height: 18px;
	color: #4DA9E4;
	
}
.dynamicContent .dynamicList .dynamicItem .address.disableds{
	color: #CECECE;
}



.dynamicContent .dynamicList .dynamicItem .address .addressIcon{
	display: inline-block;
	position: relative;
	top: 2px;
	width: 20px;
	height: 20px;
	.icon_left{
	width: 15px;
	height: 15px;		
	}
}

.dynamicContent .dynamicList .dynamicItem .dynamicTxt{
	font-size: 12px;
	color: #333333;
	line-height: 20px;	
}

.commentsContent{
	padding: 0.3rem;
	background: #FFFFFF;
	padding-top: 0;
	padding-bottom: 1.4rem;
}
.commentsContent .giveALike{
	height:1.2rem;
	border-bottom: 1px solid gainsboro;
	display: flex;
}
.commentsContent .giveALike .zan{
	flex: 0 0 40px;
	position: relative;
	.icon_zan{
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -13px;
		margin-top: -13px;
		height: 26px;
		width: 26px;
	}
}
.commentsContent .giveALike .zanUser{
	flex: 1;
}
.commentsContent .giveALike .zanUser .userList{
	height: 100%;
	width: 100%;
	overflow: hidden;
}
.commentsContent .giveALike .zanUser .userList .userItem{
	height:100%;
	width: 40px;
	margin-right: 5px;
	float: left;
	border-radius:100%;
	position: relative;
	.icon_user{
		position: absolute;
		top: 50%;
		margin-top: -19px;
		left: 0;
		border-radius:100%;
		height: 38px;
		width: 38px;
		
	}
}

.commentsContent .giveALike .more{
	flex: 0 0 40px;
	position: relative;
	.icon_more{
		position: absolute;
		top: 50%;
		margin-top: -15px;
		right: 0;
		height: 30px;
		width: 30px;
	}
}

.commentsListContent .commentsList .commentsItem{
	width: 100%;
	min-height: 2.15rem;
	display: flex;
		
}
.commentsListContent .commentsList .commentsItem .userPortrait{
	flex: 0 0 60px;
}
.commentsListContent .commentsList .commentsItem .userPortrait .icon_user{
	display: block;
	height: 45px;
	width: 45px;
	margin: auto;
	margin-top: 0.2rem;
	border-radius:100% ;
}
.commentsListContent .commentsList .commentsItem .commentsTxt{
	flex: 1;
	position: relative;
	border-bottom: 1px solid gainsboro;
	.reCommentBnt{
		position: absolute;
		background: none;
		color: #007AFF;
		width: 40px;
		text-align: center;
		height: 26px;
		padding: 0;
		line-height: 26px;
		font-size: 12px;
		bottom: 0;
		left: 0;
	}
}
.commentsListContent .commentsList .commentsItem .commentsTxt .commentInfo{
	width: 100%;
	height: 25px;
	line-height: 25px;
	padding-top: 0.32rem;
}
.commentsListContent .commentsList .commentsItem .commentsTxt .commentInfo .userName{
	float: left;
	width: 50%;
	box-sizing: border-box;
	font-size: 12px;
	color: #fd5b42;
	text-align: left;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap	
}
.commentsListContent .commentsList .commentsItem .commentsTxt .commentInfo .date{
	float: right;
	width: 50%;
	box-sizing: border-box;
	font-size: 12px;
	color: #999999;
	text-align: right;
}

.commentsListContent .commentsList .commentsItem .commentsTxt .commentContent{
	padding-top: 5px;
	font-size: 12px;
	color: #333333;
	line-height: 18px;

}
.commentsListContent .commentsList .commentsItem .commentsTxt .commentContent .name{
	font-size: 12px;
	color: #007AFF;
	padding: 0 5px;
}

.commentsListContent .commentsList .commentsItem:last-child .commentsTxt{
	border-bottom: none;
}

.loadMore{
	width: 100%;
	height: 50px;
	line-height: 30px;
	text-align: center;
	padding-top: 20px;
}

.loadMore .loadMoreBtn{
	position: relative;
	height: 30px;
	line-height: 30px;
	font-size: 14px;
	color: #333333;	
}
.loadMore .loadMoreBtn .moreIcon{
	position: relative;
	top: 5px;
	height: 18px;
	width: 20px;
}


.footer{
	position: fixed;
	bottom: 0;
	left: 0;
	height: 40px;
	width: 100%;
	box-shadow: 0 0 8px -1px rgba(0,0,0,.8);
	background: #fff;
	z-index: 100;
}

.footerLsit{
	height:40px;
	width: 100%;
	display: flex;
	background: #FFFFFF;
}

.footerLsit .f-item{
	position: relative;
	text-align: center;	
	padding-top: 5px;
	.icons{
		height: 20px;
		width: 20px;
	}
	&.close{
		flex: 0.7;
		font-size: 12px;
		color: #FF5B40;
		margin: 0;
		text-align: center;
		line-height: 34px;
	}
}



.footerLsit .f-item .numer-box{
	text-align: center;
	font-size: 12px;
	color: #333333;
	padding-right: 3px;
	box-sizing: border-box;
	height: 12px;
	line-height: 6px;
}
.footerLsit .f-item.comInput{
	position: relative;
	flex: 4;
	text-align: center;
}
.footerLsit .f-item.comInput .inputs{
	display: block;
	height: 30px;
	line-height: 30px;
	width: 90%;
	margin: auto;
	background: #efeff4;
	border-radius:100px;
	font-size: 12px;
	color: #333;
	box-sizing: border-box;
	text-align: left;
	padding-left:30px;

	
}


.footerLsit .f-item.comInput	.icons-edit{
		position: absolute;
		top: 10px;
		left: 18px;
		height: 20px;
		width: 20px;
	}


.footerLsit .f-item.comTotality{
	flex: 1;
	background-size:0.8rem 0.8rem;
	
}


.footerLsit .f-item.colTotality.notCollection{
	flex: 1;
	background-size:0.8rem 0.8rem;
	
}

.footerLsit .f-item.colTotality{
	flex: 1;
	background-size:0.8rem 0.8rem;
	
}

.footerLsit .f-item.zanTotality{
	flex: 1;
	background-size:0.8rem 0.8rem;
	
}
.footerLsit .f-item.zanTotality.isApplaud{
	background-size:0.8rem 0.8rem;	
}


.stars{
	position: fixed;
	height: 0;
	text-align: center;
	width: 100%;
	background: none;
	z-index: 1000;
	bottom: 0;
	overflow: hidden;
	transition: all 0.3s;
	&.active{
		height: 100vh;
	}
	.maker{
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 1100;
		background: rgba(0,0,0,.4);
	}
	.stars-content{
		position: absolute;
		background: #fff;
		width: 100%;
		height: 380px;
		left: 0;
		bottom: 0;
		z-index: 1200;
	}
}
.stars .sTitle{
	width: 100%;
	text-align: center;
	position: relative;
	font-size: 18px;
	color: #333333;
	height:40px;
	line-height: 40px;
	border-bottom: 1px solid #DDDDDD;
}
.stars .sTitle .sColse{
	font-size: 24px;
	position: absolute;
	left: 2%;
	top: 50%;
	margin-top: -20px;
	height: 40px;
	width: 40px;
}
.stars .scoreNum{
	height: 3.6rem;
	text-align: center;
	font-size: 3rem;
	color:#dd524d;
	line-height: 3.6rem;
}
.starsListContent{
	height: 30px;
	width: 100%;
	background: #FFFFFF;
}
.starsListContent .starsList{
	width: 100%;
	height: 30px;
	display: flex;
}
.starsListContent .starsList .star{
	flex: 1;
	text-align: center;
	.icon_star{
		height: 24px;
		width: 24px;
	}
}

.stars .instructions{
	margin-top: 10px;
	text-align: center;
	font-size: 12px;
	color: #999999;
}
.stars .sSubmitbtn{
	background: #dd524d;
	color: #FFFFFF;
	font-size: 14px;
	width: 60%;
	margin: auto;
	margin-top:0.3rem ;
	padding: 0;
	height: 36px;
	line-height: 36px;
	box-sizing: border-box;
}

	
	button::after {
		border: none;
	}
	
	button.active {
		opacity: 0.7;
	}
	
</style>
