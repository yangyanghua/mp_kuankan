<template>
  <div class="main-content">


	
	<div class="content">

		<ul class="seting-list">
			
			<li class="set-item h50">
				<button class="set-btn user-image" hover-class="active" >编辑头像
						<image class="icon_right" src="../../static/images/right.png"/>
						<image class="icon_user" src="../../static/images/user.png"/>
				</button>
			</li>
			<li class="set-item">
				<button class="set-btn" hover-class="active" >昵称
					<image class="icon_right" src="../../static/images/right.png"/>
					<span class="inValue">那只蜗牛好快</span>
				</button>
			</li>			
			<li class="set-item">
				<button class="set-btn" hover-class="active" >性别
					<image class="icon_right" src="../../static/images/right.png"/>
					<span class="inValue">男</span>
				</button>
			</li>				
			<li class="set-item aboutBtn">
				<button class="set-btn" hover-class="active" >个人简介
					<image class="icon_right" src="../../static/images/right.png"/>
				</button>
			</li>		
		</ul>
			<div class="aboutMe isempty">
				个人简介
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
			background: #F1F1F1;
		}


	
	.content{
		background: none;
		height: auto;
		width: 100%;
	}
	
	.seting-list{
		padding-top: 10px;
		width: 100%;
		background: none;
		height: auto;
		.set-item{
			height: 41px;
			width: 100%;
			background: #FFFFFF;
			box-sizing: border-box;
			border-bottom: 1px solid #F1F1F1;
			&.h50{
				height: 51px;
			}
			&.aboutBtn{
				border: none;
			}
			.set-btn{
				height: 40px;
				line-height: 40px;
				width: 100%;
				background: none;
				padding: 0 10px;
				font-size: 12px;
				color: #333;
				text-align: left;
				&.user-image{
					height: 50px;
					line-height: 50px;
					.icon_right{
						margin-top: 15px;
					}
				}
				.icon_user{
					height: 40px;
					width: 40px;
					border-radius:50%;
					float: right;
					margin-top: 5px;
				}
				.icon_right{
					margin-top: 10px;
					float: right;
					height: 20px;
					width: 20px;
				}
				.inValue{
					float: right;
					margin-right: 5px;
				}
			}
		}
	}
	.aboutMe{
		font-size: 12px;
		background: #fff;
		line-height: 24px;
		padding:0 10px;
		&.isempty{
			color: #999;
			font-size: 10px;
		}
	}



	
	button::after {
		border: none;
	}
	
	button.active {

		background-color:#f6f6f6 !important;
	}
	
</style>
