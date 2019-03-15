<template>
  <div class="main-content">


	
	<div class="content">
			<scroll-view  scroll-y>
							<!--数据列表-->
					<div class="commentsListContent">
						<ul class="commentsList">
						<li class="commentsItem" v-for="(item,index) in comments" :key="index" >
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
			</scroll-view>
	</div>


			<div class="footer" v-if="!isReply" >
				
				<ul class="footerLsit">
	 				<li class="f-item  comInput">
	 					<input  class="inputs" v-model="form.content" confirm-type="done" @confirm="sendComment"  placeholder="请输入评论" />
	 					<image class="icons-edit" src="../../static/images/edit2x.png"/>
					</li> 				
				</ul>				
				
			</div>


			<div class="footer" v-if="isReply" >
				<ul class="footerLsit">
	 				<li class="f-item  comInput">
	 					<input  class="inputs" v-model="form.content" confirm-type="done" :focus="focus" @confirm="sendComment"  :placeholder="'@'+replyUser.nickName" />
	 					<image class="icons-edit" src="../../static/images/edit2x.png"/>
					</li> 				
					<li class="f-item close" @tap="colseReply" >
						取&nbsp;&nbsp;消
					</li>
				</ul>				
			</div>



  </div>
</template>

<script>
import {commentList,commentAdd} from './srevice.js';
import {formatTime} from '@/utils/index.js'
export default {

  data () {
    return {
    	comments:[],
    	isReply:false,
    	focus:false,
    	nomore:false,
    	replyUser:{},
      form:{
      	dynamicId:'',
      	content:'',
      	toUid:''
      },    	
    	form1:{
			dynamicId:'64',
			isLeast:true,
			commentId:''
    		
    	}
    	
    }
  },

		onPullDownRefresh() {
				this.form1.commentId = '';
				this._commentList(this.form1,true);
		}, 
		onReachBottom() {
				if(!this.nomore){
					this._commentList(this.form1,false);
				}

		},
		onShow(){
			this.form1.commentId = '';
		},
		onLoad(){
			this.form1.commentId = '';
			this.form1.dynamicId = '64';
			this.form.dynamicId = '64';
			this._commentList(this.form1,true);
		},
		methods:{
	  	handelReply(user){
	  		this.isReply = true;
	  		this.replyUser = user;
	  		this.focus = true;
	  	},
	  	colseReply(){
	  		this.isReply = false;
	  		this.focus = false;
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
				this.form1.commentId = '';
				this._commentList(this.form1,true);		
  		}).catch((res)=>{
  			
					wx.showToast({
						title: res.message,
						icon: 'none',
						duration: 2000
					})	    			
  			
  		})  		
  	},	
		_commentList(opt,empty){
				wx.showLoading({
					title: '加载中',
				})	
				if(opt.commentId){
					opt.isLeast = false;
				}else{
					opt.isLeast = true;
				}
			commentList(opt).then((res)=>{
				let arr = [];
					if(res.comments.length>0){
								this.form1.commentId = res.comments[res.comments.length-1].id;
					}else {
						this.nomore = true;
					}

  					res.comments.forEach((item)=>{
  						item.createTime1  =  formatTime(new Date(item.createTime));
	  					res.bases.forEach((item1)=>{
	  						if(item.uid == item1.id ){
	  							item.user = item1;
	  						}
	  						if(item.toUid == item1.id){
	  							item.toUser = item1;
	  						}
	  					})  						
  						arr.push(item);
  					})  	
  					
				if(empty){
					this.comments = [];
				}
				this.comments =  this.comments.concat(arr);
				console.log(this.comments);
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
		
		linkTo(path){
			
							wx.navigateTo({
								url: path
							})			
			
		},			
			
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
		}

	.content{
		background: none;
		height: auto;
		width: 100%;
	}
	
	.commentsListContent{
		padding-bottom: 50px;
	}

		.commentsListContent .commentsList .commentsItem{
			width: 100%;
			min-height: 2.15rem;
			display: flex;
				
		}
		.commentsListContent .commentsList{
			padding: 0;
		}
		.commentsListContent .commentsList .commentsItem .userPortrait{
			flex: 0 0 1.5rem;
		}
		.commentsListContent .commentsList .commentsItem .userPortrait .icon_user{
			display: block;
			height: 0.9rem;
			width: 0.9rem;
			margin: auto;
			margin-top: 0.2rem;
			border-radius:100% ;
		}
		.commentsListContent .commentsList .commentsItem .commentsTxt{
			flex: 1;
			position: relative;
			padding-right: 0.2rem;
			padding-bottom: 20px;
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
				left: -7px;
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
			text-align: justify;
			line-height: 20px;
		
		}
		.commentsListContent .commentsList .commentsItem .commentsTxt .commentContent .name{
			font-size: 12px;
			color: #007AFF;
			padding: 0 5px;
		}
		
		.commentsListContent .commentsList .commentsItem:last-child .commentsTxt{
			border-bottom: none;
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
		left: 23px;
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

	
	button::after {
		border: none;
	}
	
	button.active {

		background-color:#f6f6f6 !important;
	}
	
</style>
