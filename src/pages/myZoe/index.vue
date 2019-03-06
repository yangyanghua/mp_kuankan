<template>
  <div class="main-content" >

	<div class="top-bar">
		<ul class="nav-list">
			<li class="left-btn">
				<image class="icon_search" src="../../static/images/iconset.png"/>
			</li>
			<li class="nav-item">ID:954710</li>	
			<li class="right-btn">
					<image class="icon_right" src="../../static/images/icon_map.png"/>
					<image class="icon_right share" src="../../static/images/icon_share.png"/>
			</li>
		</ul>		
	</div>
 
			<div class="header">
				<div class="headerBg">
					
					<image class="bg-image" src="../../static/images/bg_personal2.png"/>
					
				</div>
				<div class="userInfo">
				<div class="baseInfo">
						<div class="userImg">
							<image class="user-img" src="../../static/images/user.png"/>

						</div>
						<div class="userName">
							<p class="name">用户名称
								
								<image class="sex-img" mode="aspectFit" src="../../static/images/icon_boy.png"/>
							</p>
							<p class="lv"><image class="lv-img" mode="aspectFit" src="../../static/images/btnphontoer12x.png"/></p>
						</div>
						
						<div class="right-box">
								<image class="right-iocn" mode="aspectFit" src="../../static/images/right.png"/>
						</div>
						
					</div>
					<p class="introduce">但是这个属性只支持单行文本的溢出显示省略号，如果我们要实现多行文本溢出显示省略号呢。接下来重点说一说多行文本溢出显示省略号，如下。</p>
					<ul class="navList">
						<li class="navItem active">
							<p>123</p>
							<p>足迹</p>
						</li>
						<li class="navItem">
							<p>123</p>
							<p>城市</p>
						</li>
						<li class="navItem">
							<p>123</p>
							<p>国家</p>						
						</li>
						<li class="navItem">
							<p>123</p>
							<p>收藏</p>						
						</li>
						<li class="navItem">
							<p>123</p>
							<p>地点</p>							
						</li>
					</ul>	
	
				</div>
			</div>
			
			
<div class="content">
		
		<ul class="data-list list-left">
			<li class="data-item">
				<image class="data-img" mode="widthFix" src="../../static/images/img1.jpg"/>
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
				<image class="data-img" mode="widthFix" src="../../static/images/bg_personal2.png"/>
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



	</div>	
			
			
			
			
			
			
			<div class="bar-bottom"></div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      logs: [],
      imgUrls: [
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/management-school-picture/7683b32e-4e44-4b2f-9c03-c21f34320870'
      ]
    }
  },

  created () {
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
	flex: 0 0 1.3rem;
	text-align: center;
} 
.header .userInfo .baseInfo .userImg .user-img{
	display: block;
	height: 1.3rem;
	width: 1.3rem;
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
	height: 1.2rem;
	text-align: center;
}
.header .navList .navItem{
	flex: 1;
	position: relative;
}
.header .navList .navItem p{
	color: #333333;
	height: 0.6rem;
	line-height: 0.6rem;
	font-weight: bold;
	font-size: 12px;
}
.header .navList .navItem.active p{
	color: #FF5B40;
}
.header .navList .navItem.active::before{
	content: '';
	height: 2px;
	width: 1rem;
	position: absolute;
	bottom: -0.05rem;
	left: 50%;
	margin-left: -0.5rem;
	background: #FF5B40;
}


	.content{
		padding: 8px;
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
