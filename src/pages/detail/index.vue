<template>
  <div class="main-content">

	<div class="header">
		<ul class="nav-list">
			<li class="left-btn">
				<image class="icon_search" src="../../static/images/icon_search.png"/>
			</li>
			<li class="nav-item">详情</li>
			<li class="right-btn">
					<image class="icon_right" src="../../static/images/icon_addfriend.png"/>
			</li>
		</ul>		
	</div>

			<div class="banner" >
				<image class="banner-bg" src="../../static/images/bg_personal2.png"/>
				<div class="Dynpublisher">
					<div class="portrait"><image class="user-img" src="../../static/images/user.png"/></div>
					<div class="nameInfo">
						<p class="DynpublisherName"><span id="DynpublisherName">名字</span></p>
					</div>
				</div>
				<div class="scorecontent">
					<p class="score-p score-title" >评分</p>
					<p class="score-p scoreP"><span class="score">50</span>/10</p>
					<p class="score-p" ><span  class="numberOfscores">180</span>人</p>
				</div>
			</div>


			<div class="travelContent">
				<h1 class="traveltitle"></h1>
				<p class="secondary">
					<span class="releaseTime"></span>
					<label style="font-size: 12px;color: #333333;"><span class="viewed" style="margin-right: 0;"></span>次</label>
				</p>
				<ul class="viaNav">
					<li><span class="tujing">途经</span></li>
					<li><span class="passCity"></span>个城市</li>
					<li>历时<span class="usDay"></span>天</li>
				</ul>
				<div class="cityList">
					<div class="citySwiper">
					  <div class="swiper-wrapper">
<!--					    <div class="swiper-slide"><p class="date">10.20</p><p class="cityname">广西</p><span class="line"></span></div>-->
					  </div>
					    <div class="swiper-button-prev swiper-button-black"></div>
    					<div class="swiper-button-next swiper-button-black"></div>
					</div>					
				</div>	
			</div>

	
	<div class="content">



	</div>


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
	padding: 0.3rem;
	padding-top: 1.5rem;
}
.travelContent .traveltitle{
	font-size: 0.5rem;
	color: #333333;
	line-height: 0.7rem;
}


.travelContent .secondary span{
	margin-right: 0.5rem;
	font-size: 12px;
	color: #666666;
}
.travelContent .secondary span.viewed{
	padding-left: 20px;
	background-size:16px 10px;
}

.travelContent .viaNav{
	height: 30px;
	line-height: 30px;
	width: 100%;
	display: flex;
}
.travelContent .viaNav li{
	flex: 1;
	font-size: 14px;
	color: #000000;
}
.travelContent .viaNav li:nth-child(1){
	text-align: left;
}
.travelContent .viaNav li:nth-child(2){
	text-align: center;
}
.travelContent .viaNav li:nth-child(3){
	text-align: right;
}
.travelContent .viaNav li .tujing{
	padding-left: 20px;
	background-size:15px 15px;
}


.travelContent .cityList{
	position: relative;
	height: 2.5rem;
	width: 100%;
	background-size:cover ;
}
.travelContent .citySwiper .swiper-slide{
	position: relative;
	border-top:1px  solid #FFFFFF;
	height: 2.5rem;
	text-align: center;
	font-size: 14px;
	color: #666666; 
}
.travelContent .citySwiper .swiper-slide .cityname{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;	
}


.travelContent .citySwiper .swiper-button-prev{
	background-size:12px 25px ;
	left: -10px;
	opacity: 0.4;
}

.travelContent .citySwiper .swiper-button-next{
	background-size:12px 25px ;
	right: -10px;
	opacity: 0.4;
}


.travelContent .citySwiper .swiper-slide .date{
	margin-top: 0.6rem;
}

.travelContent .citySwiper .swiper-slide .line{
	position: absolute;
	display: block;
	width: 100%;
	border-top: 1px dashed #999999;
	margin-top: -1px;
	top: 50%;
	left: 0;
}
.travelContent .citySwiper .swiper-slide .line::after{
	position: absolute;
	content: '';
	display: block;
	height:8px;
	width: 8px;
	top: 50%;
	left: 50%;
    margin-top: -5px;
    margin-left: -4px;	
	border-radius:100%;
	background: #ff3843;
}

	
	
	.content{
		background: #fff;
		height: auto;
		width: 100%;
	}



	
	button::after {
		border: none;
	}
	
	button.active {
		opacity: 0.7;
	}
	
</style>
