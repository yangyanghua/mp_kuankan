<template>
  <div class="main-content">


	
	<div class="content">

		<ul class="seting-list">
			
			<li class="set-item">
				<button class="set-btn" hover-class="active" >推荐快看给朋友
						<image class="icon_right" src="../../static/images/right.png"/>
				</button>
			</li>
			<li class="set-item">
				<button class="set-btn" hover-class="active" >联系我们
					<image class="icon_right" src="../../static/images/right.png"/>
				</button>
			</li>			
			<li class="set-item">
				<button class="set-btn" hover-class="active" >关于
					<image class="icon_right" src="../../static/images/right.png"/>
				</button>
			</li>			
			<li class="set-item logout">
				<button class="set-btn out-btn" hover-class="active" >退出登录</button>
			</li>				
		</ul>



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
			&.logout{
				margin-top: 10px;
				.set-btn{
					text-align: center;
				}
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
				.icon_right{
					margin-top: 10px;
					float: right;
					height: 20px;
					width: 20px;
				}
			}
		}
	}




	
	button::after {
		border: none;
	}
	
	button.active {

		background-color:#f6f6f6 !important;
	}
	
</style>
