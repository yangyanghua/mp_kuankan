<template>
  <div class="main-content">

	<div class="header">
		<ul class="nav-list">
			<li class="left-btn">
				<image class="icon_search" src="../../static/images/icon_search.png"/>
			</li>
			<li class="nav-item">我关注的</li>
			<li class="nav-item">关注我的</li>
			<li class="right-btn">
					<image class="icon_right" src="../../static/images/icon_addfriend.png"/>
			</li>
		</ul>		
	</div>
	
	
	<div class="content">

			<div class="fans" >
				<ul class="fansList">
					<li class="fansItem">
						<div class="fansImage"><image class="user-img" src="../../static/images/user.png"/></div>
						<div class="fansInfo">
							<p class="fansName">item.nickName</p>
							<p>快看ID：item.no</p>
							<p>上次登录：2018-12-10 18:00</p>
						</div>
						<button class="foll-btn btnA"  ><image class="icon" src="../../static/images/icon_guanzhu.png"/>相互关注</button>
					</li>		
					
					<li class="fansItem">
						<div class="fansImage"><image class="user-img" src="../../static/images/user.png"/></div>
						<div class="fansInfo">
							<p class="fansName">item.nickName</p>
							<p>快看ID：item.no</p>
							<p>上次登录：2018-12-10 18:00</p>
						</div>
						<button class="foll-btn"  >关注</button>
					</li>	

					<li class="fansItem">
						<div class="fansImage"><image class="user-img" src="../../static/images/user.png"/></div>
						<div class="fansInfo">
							<p class="fansName">item.nickName</p>
							<p>快看ID：item.no</p>
							<p>上次登录：2018-12-10 18:00</p>
						</div>
						<button class="foll-btn btnA"  >已关注</button>
					</li>	
					
				</ul>
			</div>	

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
				flex: 4;
				text-align: center;
				line-height: 36px;
				font-size: 14px;
				color: #333;
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
	height: 80px;
	background: #FFFFFF;
	padding: 10px;
	margin-bottom: 10px;
}
.fansList .fansItem .fansImage{
	flex: 0 0 70px;
}
.fansList .fansItem .fansImage .user-img{
	display: block;
	height: 50px;
	width: 50px;
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
.fansList .fansItem .fansInfo p{
	height: 20px;
	line-height: 20px;
	font-size: 12px;
	color: #666666;
}
.fansList .fansItem .fansInfo p.fansName{
	height: 20px;
	line-height: 20px;
	font-weight: bold;
	color: #333333;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
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
