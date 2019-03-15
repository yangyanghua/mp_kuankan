<template>
  <div class="main-content">


	
	<div class="content">
			<scroll-view  scroll-y>
							<!--数据列表-->
					<div class="commentsListContent">			
							<ul class="likeList commentsList">
									<li class="commentsItem" v-for="(item,index) in data" :key="index" >
										<div class="userPortrait">
											<image class="userPortrait-img" :src="item.user.avatar"/>
										</div>
										<div class="commentsTxt">
										<p class="commentInfo">
										<span class="userName">{{item.user.nickName}}</span>
										<span class="date">{{item.createTime1}}</span>
										</p>	 							
										</div>								
									</li>						
							</ul>
					</div>
			</scroll-view>
	</div>



  </div>
</template>

<script>
import {getGoods} from './srevice.js';
import {formatTime} from '@/utils/index.js'
export default {

  data () {
    return {
    	data:[],
    	nomore:false,
    	form:{
			dynamicId:'64',
			isLeast:true,
			applaudId:''
    		
    	}
    	
    }
  },

		onPullDownRefresh() {
				this.form.applaudId = '';
				this._getGoods(this.form,true);
		}, 
		onReachBottom() {
				if(!this.nomore){
					this._getGoods(this.form,false);
				}
					

		},
		onShow(){
			this.form.applaudId = '';
		},
		onLoad(){
			this.form.applaudId = '';
			this.form.dynamicId = '64';
			this._getGoods(this.form,true);
		},
		methods:{
		_getGoods(opt,empty){
				wx.showLoading({
					title: '加载中',
				})	
				if(opt.applaudId){
					opt.isLeast = false;
				}else{
					opt.isLeast = true;
				}				
			getGoods(opt).then((res)=>{
				let arr = [];
				if(res.applauds.length>0){
							this.form.applaudId = res.applauds[res.applauds.length-1].id;
				}else{
					this.nomore = true;
				}
				res.applauds.forEach((item)=>{			
					item.user =  res.bases.filter((item1)=>{ return item1.id==item.uid})[0];
					item.createTime1 =  formatTime(new Date(item.createTime));
					arr.push(item);
				})
				if(empty){
					this.data = [];
				}
				this.data =  this.data.concat(arr);
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
	
	

			.likeList{
				min-height: 300px;
				padding: 0.2rem;
				
			}


			.commentsListContent{
				border: none;
				
			}
			.commentsListContent .commentsList .commentsItem{
				width: 100%;
				height: 70px;
				display: flex;
				border-bottom: 1px solid #F1F1F1;	
			}
			.commentsListContent .commentsList .commentsItem .userPortrait{
				flex: 0 0 66px;
				position: relative;
			}
			.commentsListContent .commentsList .commentsItem .userPortrait .userPortrait-img{
				display: block;
				height: 40px;
				width: 40px;
				margin: auto;
				position: absolute;
				top: 50%;
				left: 50%;
				margin-left:-20px;
				margin-top: -20px;
				background-size:cover ;	
				border-radius:100% ;
			}
			.commentsListContent .commentsList .commentsItem .commentsTxt{
				position: relative;
				flex: 1;
			}
			.commentsListContent .commentsList .commentsItem .commentsTxt .commentInfo{
				position: absolute;
				top: 50%;
				margin-top: -15px;
				width: 100%;
				height: 30px;
				line-height: 30px;
			}
			.commentsListContent .commentsList .commentsItem .commentsTxt .commentInfo .userName{
				float: left;
				width: 50%;
				box-sizing: border-box;
				font-size: 14px;
				color: #666666;
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

	
	button::after {
		border: none;
	}
	
	button.active {

		background-color:#f6f6f6 !important;
	}
	
</style>
