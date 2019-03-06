<template>
  <div class="main-content">
	
	<div class="header">
		<ul class="nav-list">
			<li class="left-btn">
				<image class="icon_search" src="../../static/images/icon_search.png"/>
			</li>
			<li class="nav-item" v-bind:class="{'active':active == 1}" @tap="handleNav(1)" >关注</li>
			<li class="nav-item" v-bind:class="{'active':active == 2}" @tap="handleNav(2)" >发现</li>
			<li class="nav-item" v-bind:class="{'active':active == 3}" @tap="handleNav(3)" >热门</li>
			<li class="right-btn">
					<image class="icon_right" src="../../static/images/icon_map.png"/>
			</li>
		</ul>		
	</div>
	
	<!--<div class="content">
		
		<ul class="data-list list-left">
			<li class="data-item">
				<image class="data-img" mode="widthFix" src="../../static/images/img1.png"/>
				<p class="data-title">标题标题表提标题提tit提提</p>	
				<div class="user-info">
					<div class="user-image">
						<image class="user-img" src="../../static/images/user.png"/>
					</div>
					<div class="info-txt">
						<p class="name">张三李四</p>
						<p class="creatTime">2018-10-10 12:30</p>
					</div>		
				</div>
			</li>
		</ul>
		
		<ul class="data-list list-right">
			<li class="data-item">
				<image class="data-img" mode="widthFix" src="../../static/images/bg_personal@2x.png"/>
				<p class="data-title">标题标题表提标题提tit提提</p>	
				<div class="user-info">
					<div class="user-image">
						<image class="user-img" src="../../static/images/user.png"/>
					</div>
					<div class="info-txt">
						<p class="name">张三李四</p>
						<p class="creatTime">2018-10-10 12:30</p>
					</div>		
				</div>
			</li>
		</ul>	

	<div class="btn-box">
			<image class="photo-img" src="../../static/images/photo/icon_canmera.png"/>
	</div>

	</div>
	-->
	
	<div class="map-content">
		
		<map class="map" id="map" :longitude="longitude" :latitude="latitude" scale="6" show-location="true" :markers="markers"   @regionchange="regionchange" @end="regionchange"    @markertap="makertap">
			

		  <cover-view class="btn-box" @tap="makertap" >
		      <cover-image class="photo-img" src="../../static/images/photo/icon_canmera.png" />
		  </cover-view>
			
			
		</map>
		
	</div>
	
	


  </div>
</template>

<script>
import {findListMap,hotListMap} from './srevice.js';
export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      markers: [],
      latitude: '',
      longitude: '',
      MAP:{},
      dataType:1,
      active:2,
      form:{},
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {},
  methods: {
  	handleNav(index){
  		
  		if(this.active==index){
  			return false;
  		}else{
  			this.active = index;
							if(this.active==2){
								this._findListMap(this.form);
							}else if(this.active==3){
								this._hotListMap(this.form);
							}  			
  		}
  		 		
  	},
  	regionchange(e){
  		let vm = this;
					vm.MAP.getRegion({
						success:function(res){
							vm.form = {
								minX:res.southwest.longitude, 
								maxX:res.northeast.longitude,
								minY:res.southwest.latitude,
								maxY:res.northeast.latitude								
							};
							if(vm.active==2){
								vm._findListMap(vm.form);
							}else if(vm.active==3){
								vm._hotListMap(vm.form);
							}
							
							
						},
						fail:function(res){
							
						}
						
					})	
  	},
  	makertap(e){
  			console.log(e);
  	},
  	
  	_hotListMap(opt){
  		
  		
  		hotListMap(opt).then((res)=>{
  			let vm = this;
  			vm.markers = [];
				if(res.object.length > 0){
					
					res.object.forEach((item)=>{
						
							vm.markers.push(
								
			  					{
										id:item.t.dynamicId,//	标记点id	Number	否	marker点击事件回调会返回此id。建议为每个marker设置上Number类型id，保证更新marker时有更好的性能。	
										latitude:item.position.latitude,//	纬度	Number	是	浮点数，范围 -90 ~ 90	
										longitude:item.position.longitude,//	经度	Number	是	浮点数，范围 -180 ~ 180	
										title:'',	//标注点名	String	否		
										zIndex:-1,//	显示层级	Number	否		2.3.0
										iconPath:item.t.photoUrl,//	显示的图标	String	是	项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径和网络图片（2.3.0）	
										rotate:0,//	旋转角度	Number	否	顺时针旋转的角度，范围 0 ~ 360，默认为 0	
										alpha:1,//	标注的透明度	Number	否	默认1，无透明，范围 0 ~ 1	
										width:'80rpx',//	标注图标宽度	Number / String	否	默认为图片实际宽度，单位px（2.4.0起支持rpx）	
										height:'80rpx',//	标注图标高度	Number / String	否	默认为图片实际高度，单位px（2.4.0起支持rpx）
			  						label:{
											content:String(item.size),//	文本	String	1.2.0
											color:'#fff',//	文本颜色	String	1.2.0
											fontSize:12,//	文字大小	Number / String	1.2.0
											borderRadius:'100px',//	边框圆角	Number / String	1.2.0
											borderWidth:0,//	边框宽度	Number / String	2.3.0
											borderColor:'#ff5b40',//	边框颜色	String	2.3.0
											bgColor:'#ff5b40',//	背景色	String	1.2.0
											anchorX:'20rpx',
											anchorY:'-100rpx',
											padding:5,//	文本边缘留白	Number / String	1.2.0
											display:'ALWAYS',//	'BYCLICK':点击显示; 'ALWAYS':常显	String	1.2.0
											textAlign:'center'//	文本对齐方式。有效值: left, right, center	String	  							
			  						}
			  						
			  						
			  					}								
								
								
							)
						
					})
					
				}
				
  		}).catch((res)=>{
					wx.showToast({
						title: res.message,
						icon: 'none',
						duration: 2000
					})	  				
  		})  		
  		
  		
  	},
  	
  	_findListMap(opt){
  		
  		findListMap(opt).then((res)=>{
  			let vm = this;
  			vm.markers = [];
				if(res.object.length > 0){
					
					res.object.forEach((item)=>{
						
							vm.markers.push(
								
			  					{
										id:item.t.dynamicId,//	标记点id	Number	否	marker点击事件回调会返回此id。建议为每个marker设置上Number类型id，保证更新marker时有更好的性能。	
										latitude:item.position.latitude,//	纬度	Number	是	浮点数，范围 -90 ~ 90	
										longitude:item.position.longitude,//	经度	Number	是	浮点数，范围 -180 ~ 180	
										title:'',	//标注点名	String	否		
										zIndex:-1,//	显示层级	Number	否		2.3.0
										iconPath:item.t.photoUrl,//	显示的图标	String	是	项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径和网络图片（2.3.0）	
										rotate:0,//	旋转角度	Number	否	顺时针旋转的角度，范围 0 ~ 360，默认为 0	
										alpha:1,//	标注的透明度	Number	否	默认1，无透明，范围 0 ~ 1	
										width:'80rpx',//	标注图标宽度	Number / String	否	默认为图片实际宽度，单位px（2.4.0起支持rpx）	
										height:'80rpx',//	标注图标高度	Number / String	否	默认为图片实际高度，单位px（2.4.0起支持rpx）
			  						label:{
											content:String(item.size),//	文本	String	1.2.0
											color:'#fff',//	文本颜色	String	1.2.0
											fontSize:12,//	文字大小	Number / String	1.2.0
											borderRadius:'100px',//	边框圆角	Number / String	1.2.0
											borderWidth:0,//	边框宽度	Number / String	2.3.0
											borderColor:'#ff5b40',//	边框颜色	String	2.3.0
											bgColor:'#ff5b40',//	背景色	String	1.2.0
											anchorX:'20rpx',
											anchorY:'-100rpx',
											padding:5,//	文本边缘留白	Number / String	1.2.0
											display:'ALWAYS',//	'BYCLICK':点击显示; 'ALWAYS':常显	String	1.2.0
											textAlign:'center'//	文本对齐方式。有效值: left, right, center	String	  							
			  						}
			  						
			  						
			  					}								
								
								
							)
						
					})
					
				}
				
  		}).catch((res)=>{
					wx.showToast({
						title: res.message,
						icon: 'none',
						duration: 2000
					})	  				
  		})
  		
  	},
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {

      // throw {message: 'custom test'}
    },
    initMap(){
    	let vm = this;
	   	wx.getLocation({
	  		success:function(res){
	  			vm.latitude = res.latitude;
	  			vm.longitude = res.longitude;
	  			
//					vm.MAP.getRegion({
//						success:function(res){
//							let opt = {
//								minX:res.southwest.longitude, 
//								maxX:res.northeast.longitude,
//								minY:res.southwest.latitude,
//								maxY:res.northeast.latitude
//							}
//							vm._findListMap(opt);
//							
//							
//						},
//						fail:function(res){
//							
//						}
//						
//					})	  			
	  			

	  		},
	  		fail:function(){
	  			
	  		}
	  		
	  	})   	
    }
  },

  onLoad () {
  	let vm = this;
		this.MAP =  wx.createMapContext('map');
		
  	this.initMap();
  	
  	
  }
}
</script>

<style lang="scss" scoped>
		
		.main-content{
			position: relative;
			height: auto;
			width: 100%;
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
				flex: 1.5;
				text-align: center;
				line-height: 36px;
				font-size: 14px;
				color: #333;
				&.active{
					color: #FF5B40;
				}
				&.active::after{
					position: absolute;
					content: '';
					height: 2px;
					width: 40px;
					bottom: 5px;
					background: #FF5B40;
					left: 50%;
					margin-left: -20px;
				}
				
			}
			
			
		}
		
	}
	.content{
		background: #f1f1f1;
		padding: 10px;
		padding-top: 36px;
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
					}
				}
			}
		}
	}
.map-content{
	box-sizing: border-box;
	padding-top: 36px;
	height: 100%;
	width: 100%;
	background: #fff;
}
.map{
	height: 93vh;
	width: 100%;
}	
	
image{
	height: auto;
	width: auto;
}

.btn-box{
	position: fixed;
	z-index: 10000;
	height: 40px;
	width: 40px;
	border-radius:50%;
	box-shadow: 0 6px 10px 0 #ff5b40;
	background: #ff5b40;
	bottom: 15px;
	left: 50%;
	overflow: hidden;
	margin-left: -20px;
	box-sizing: border-box;
	.photo-img{
		height: 41px;
		width: 41px;
	}
}

</style>
