<template>
  <div class="main-content" >
	<div class="content">

			<div class="fans" >
				<ul class="fansList">
					<li class="fansItem" v-for="(item,index) in data" :key="index"  >
						<div class="fansImage">
							<image class="user-img" v-if="item.messageEvent.user.avatar" :src="item.messageEvent.user.avatar"/>
							<image class="user-img" v-if="!item.messageEvent.user.avatar" src="../../static/images/shouq/photo_logo2.png"/>
						</div>
						<div class="fansInfo" @tap="linkToDynamic(item.messageEvent.originId)" >
							<p class="fansName"> <span class="userName" >{{item.messageEvent.user.nickName}}</span>&nbsp;<span class="eventName" >{{item.messageEvent.typeName}}</span> </p>
							<p class="time" >{{item.messageEvent.createTime1}}</p>
						</div>
						<div class="info-img-box" @tap="linkToDynamic(item.messageEvent.originId)" >
								<image class="info-img" mode="aspectFill" :src="item.messageEvent.url"/>
						</div>						
					</li>		
				</ul>
			</div>	

	</div>

<div class="bar-bottom"></div>
    
  </div>
</template>

<script>
import {messageCenter} from './srevice.js';
import {formatTime} from '@/utils/index.js';
//		good	2	赞
//		reply	3	回复
//		follow_location	4	关注区域
//		location_new_photo	5	关注的地点 有新照片
//		follow_friend	6	关注好友
//		frined_dynamic	7	好友动态推送
export default {

  data () {
    return {
			data:[],
			eventName:['评论了您的游记','赞了您的游记','回复了您','关注区域','关注的地点 有新照片','关注了您','发布了新游记'],
			
    }
  },
		onPullDownRefresh() {
			this._messageCenter();

		},  
  onLoad(){
  	
  		this._messageCenter();

  	
  },  
	methods:{
			linkToDynamic(id){
				
				wx.navigateTo({
					url: '../detail/main?id='+id
				})			
				
			},			
		_messageCenter(){
				wx.showLoading({
					title: '加载中',
				})				
			messageCenter({isLeast:true}).then((res)=>{
				let vm = this;
				  res.object.forEach((item)=>{
				  		item.messageEvent.typeName = vm.eventName[item.messageEvent.type-1];
				  		item.messageEvent.createTime1 = formatTime(new Date(item.messageEvent.createTime));
				  		item.userBases.forEach((user)=>{
				  			if(user.id == item.messageEvent.uid){
				  				item.messageEvent.user = user;
				  			}
				  			
				  		})

				  })
				  
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

<style lang="scss" scoped>
		.main-content{
			position: relative;
			height: auto;
			width: 100%;
			box-sizing: border-box;
			min-height: 100vh;
			background: #fff;
		}

.content{
	background: #fff;
	height: auto;
	width: 100%;
	padding-top: 10px;
	border-top:10px solid #F1F1F1;
}

.fansList .fansItem{
	position: relative;
	display: flex;
	height: 50px;
	background: #FFFFFF;
	padding: 10px;
}
.fansList .fansItem .fansImage{
	flex: 0 0 50px;
}
.fansList .fansItem .fansImage .user-img{
	display: block;
	height: 40px;
	width: 40px;
	border-radius:100px;
	background-size:cover;
}

.fansList .fansItem .fansInfo {
	flex:1;
	box-sizing: border-box;
	padding-left: 10px;	
	font-size: 12px;
	color: #666666;
	.time{
		height: 20px;
		line-height: 20px;		
	}
}
.fansList .fansItem .fansInfo .fansName{
	height: 20px;
	line-height: 20px;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;	
	.userName{
		font-weight: bold;
		color: cornflowerblue;
	}
	.eventName{
		font-size: 12px;
		color: #666;
	}

}
.info-img-box{
	
	flex: 0 0 50px;
	.info-img{
		float: right;
		height: 40px;
		width: 40px;
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
