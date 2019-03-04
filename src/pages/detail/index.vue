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
				<h1 class="traveltitle">游戏游戏游戏游戏游戏</h1>
				<p class="secondary">
					<span class="releaseTime">发表于&nbsp;2018-12-12 12:30</span>
					<label class="label-txt"> <span class="viewed" style="margin-right: 0;"> <image class="icon_left" src="../../static/images/icon_look2x.png"/>&nbsp;2650</span>次</label>
				</p>
				<ul class="viaNav">
					<li class="viaNav-item" ><span class="tujing"><image class="icon_left" src="../../static/images/icon_pathway2x.png"/>&nbsp;途经</span></li>
					<li class="viaNav-item" ><span class="passCity">1</span>个城市</li>
					<li class="viaNav-item" >历时<span class="usDay">2</span>天</li>
				</ul>
				<div class="cityList">


				<swiper class="swiper-content" display-multiple-items="3.5" >
				  <block>
				    <swiper-item>
				      <div class="swiper-slide"><p class="date">10.20</p><p class="cityname">广西</p><span class="line"></span></div>
				    </swiper-item>
				  </block>
				  
				  <block>
				    <swiper-item>
				      <div class="swiper-slide"><p class="date">10.20</p><p class="cityname">广西</p><span class="line"></span></div>
				    </swiper-item>
				  </block>	
				  
				  <block>
				    <swiper-item>
				      <div class="swiper-slide"><p class="date">10.20</p><p class="cityname">广西</p><span class="line"></span></div>
				    </swiper-item>
				  </block>					  

				  <block>
				    <swiper-item>
				      <div class="swiper-slide"><p class="date">10.20</p><p class="cityname">广西</p><span class="line"></span></div>
				    </swiper-item>
				  </block>	

				</swiper>

					<image class="map_bg"  src="../../static/images/photomap2x.png"/>
				</div>	
			</div>

	
	<div class="content">

				<div class="dynamicContent">
				<p class="dect">动态详情啊 啊啊啊啊啊</p>					
					<ul class="dynamicList">

						<li class="dynamicItem">
							<a class="downImage">  <image class="icon_download" src="../../static/images/icon_download2x.png"/> </a>
							<p class="dateInfo">
								<span class="itemIndex">1/60</span>
								<span class="tiem">第一天，拍摄于2018-12-03 05:20</span>
								<div class="dynamicImg">
									<image src="../../static/images/photo_01.png" />
								</div>
								<p class="address"><span class="addressIcon"><image class="icon_left" src="../../static/images/icon_position2x.png"/></span>美国.新西泽州.纽约线.纽约市.皇后区第五大道（海拔399米）</p>
							</p>
							<p class="dynamicTxt">第一天到这个鸟不拉屎的地方，一眼望过去全是沙子，好多沙子啊，根本没办法吃东西，没办法只能继续走了。</p>
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
								<li class="userItem"><image class="icon_user" src="../../static/images/user.png"/></li>
								<li class="userItem"><image class="icon_user" src="../../static/images/user.png"/></li>
								<li class="userItem"><image class="icon_user" src="../../static/images/user.png"/></li>
								<li class="userItem"><image class="icon_user" src="../../static/images/user.png"/></li>
								<li class="userItem"><image class="icon_user" src="../../static/images/user.png"/></li>
					  	</ul>
					  </div>
					  <div class="more" id="loadmoreZan" >
					  		<image class="icon_more" src="../../static/images/icon_more2.png"/>
					  </div>
					</div>
					<div class="commentsListContent">
						<ul class="commentsList">

						<li class="commentsItem">
								<div class="userPortrait"><image class="icon_user" src="../../static/images/user.png"/></div>
								<div class="commentsTxt">
								<p class="commentInfo">
									<span class="userName">昵称而已</span>
									<span class="date">2015-12-20 12:30</span>
								</p>	 
								<p class="commentContent">
								   @<span class="name">用户昵称</span>：随便放点文字看看效果，随便放点文字看看效果，随便放点文字看看效果，随便放点文字看看效果，随便放点文字看看效果，随便放点文字看看效果，随便放点文字看看效果，随便放点文字看看效果，随便放点文字看看效果，随便放点文字看看效果，随便放点文字看看效果，
								</p>							
								</div>								
							</li>							
						
							
						</ul>
					</div>
					<div class="loadMore">
						<p class="loadMoreBtn">查看更多评论  <image class="moreIcon" src="../../static/images/icon_next2x.png"/></p>
					</div>
	
				</div>	

			
			<div class="footer">
				
				<ul class="footerLsit">
	 				<li class="f-item  comInput">
	 					<input  class="inputs" placeholder="请输入评论" />
	 					<image class="icons-edit" src="../../static/images/edit2x.png"/>
						<!--<span class="inputs"> 写评论</span>-->
					</li> 				
	 				<li class="f-item comTotality">
	 					<image class="icons" src="../../static/images/icon_comments2x.png"/>
						<p class="numer-box">10</p>
					</li>
					<li class="f-item colTotality">
						<image class="icons" src="../../static/images/icon_collect2x.png"/>
						<p class="numer-box">10</p>
					</li>
					<li class="f-item zanTotality">
						<image class="icons" src="../../static/images/icon_praise2x.png"/>
						<p class="numer-box">10</p>
					</li>
				</ul>				
				
			</div>

			<div class="stars">
				<div class="maker"></div>
			
			<div class="stars-content">
					<h2 class="sTitle"><span class="sColse">×</span>评分</h2>
					<p class="scoreNum">0</p>
					<div class="starsListContent">
						<ul class="starsList">
							<li class="star"><image class="icon_star" src="../../static/images/icon_score.png"/></li>
							<li class="star"><image class="icon_star" src="../../static/images/icon_score.png"/></li>
							<li class="star"><image class="icon_star" src="../../static/images/icon_score.png"/></li>
							<li class="star"><image class="icon_star" src="../../static/images/icon_score.png"/></li>
							<li class="star"><image class="icon_star" src="../../static/images/icon_score.png"/></li>
							<li class="star"><image class="icon_star" src="../../static/images/icon_score.png"/></li>
							<li class="star"><image class="icon_star" src="../../static/images/icon_score.png"/></li>
							<li class="star"><image class="icon_star" src="../../static/images/icon_score.png"/></li>
							<li class="star"><image class="icon_star" src="../../static/images/icon_score.png"/></li>
							<li class="star"><image class="icon_star" src="../../static/images/icon_score.png"/></li>
						</ul>
					</div>
					<p class="instructions">*评分确定后无法修改</p>
					<button class="sSubmitbtn" hover-class="active" >确认评分</button>				
			</div>

			</div>			
			

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
	font-size: 14px;
	color: #666666;
	z-index: 10; 
}
 .swiper-slide .cityname{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		margin-top: 11px;	
}



 .swiper-slide .date{
	margin-top: 20px;
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
.dynamicContent .dynamicList .dynamicItem  .dynamicImg image{
	width: 100%;
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
	border-bottom: 1px solid gainsboro;
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
	color: #999999;
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
	height: 100vh;
/*	height: 0;*/
	text-align: center;
	width: 100%;
	background: none;
	z-index: 1000;
	bottom: 0;
	overflow: hidden;
	transition: all 0.3s;
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
