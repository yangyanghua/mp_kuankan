<template>
  <div class="main-content" >
	<div class="content">

			<div class="fans" >
				<ul class="fansList">
					<li class="fansItem">
						<div class="fansImage"><image class="user-img" src="../../static/images/user.png"/></div>
						<div class="fansInfo">
							<p class="fansName">item.nickName</p>
							<p>上次登录：2018-12-10 18:00</p>
						</div>
						<div class="info-img-box">
								<image class="info-img" mode="aspectFill" src="../../static/images/img1.png"/>
						</div>						
					</li>		
					
					<li class="fansItem">
						<div class="fansImage"><image class="user-img" src="../../static/images/user.png"/></div>
						<div class="fansInfo">
							<p class="fansName">item.nickName</p>
							<p>上次登录：2018-12-10 18:00</p>
						</div>
						
						<div class="info-img-box">
								<image class="info-img" mode="aspectFill" src="../../static/images/img1.png"/>
						</div>
						
					</li>	

					<li class="fansItem">
						<div class="fansImage"><image class="user-img" src="../../static/images/user.png"/></div>
						<div class="fansInfo">
							<p class="fansName">item.nickName</p>
							<p>上次登录：2018-12-10 18:00</p>
						</div>
						<div class="info-img-box">
								<image class="info-img" mode="aspectFill" src="../../static/images/img1.png"/>
						</div>						
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
