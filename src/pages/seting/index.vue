<template>
  <div class="main-content">


	
	<div class="content">

		<ul class="seting-list">
			
			<li class="set-item">
				<button class="set-btn" open-type="share"   hover-class="active" >推荐快看给朋友
						<image class="icon_right" src="../../static/images/right.png"/>
				</button>
			</li>
			<li class="set-item">
				<button class="set-btn" @tap="linkTo('../contactUs/main')"  hover-class="active" >联系我们
					<image class="icon_right" src="../../static/images/right.png"/>
				</button>
			</li>			
			<!--<li class="set-item">
				<button class="set-btn" hover-class="active" >关于
					<image class="icon_right" src="../../static/images/right.png"/>
				</button>
			</li>			-->
			<li class="set-item logout">
				<button class="set-btn out-btn"  @tap="logout"  hover-class="active" >退出登录</button>
			</li>				
		</ul>



	</div>



  </div>
</template>

<script>

export default {

  data () {
    return {
    	
    	
    }
  },
		onShareAppMessage: function() {

			return {

				title:'快看，跟我一起看真实的世界',
				desc: '',
				path: '/pages/index/main', // 路径，传递参数到指定页面。
				imageUrl: '/static/images/photo_01.png'
			}
		},
		methods:{
		logout(){
			wx.showModal({
			  title: '提示',
			  confirmColor:'#FF5B40',
			  content: '是否退出登录？',
			  success(res) {
			    if (res.confirm) {
			      
								wx.removeStorage({
								  key: 'userInfo',
								  success(res) {
								    
										wx.switchTab({
										  url: '../index/main'
										})
								    
								    
								  }
								})
			      
			    } else if (res.cancel) {
			      
			      console.log('用户点击取消')
			      
			    }
			  }
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
