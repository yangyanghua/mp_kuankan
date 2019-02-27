<template>
  <div class="main-content">
	
	<div class="header">
		<ul class="nav-list">
			<li class="left-btn">
				<image class="icon_search" src="../../static/images/icon_search.png"/>
			</li>
			<li class="nav-item">关注</li>
			<li class="nav-item">发现</li>
			<li class="nav-item">热门</li>
			<li class="right-btn">
					<image class="icon_right" src="../../static/images/icon_map.png"/>
			</li>
		</ul>		
	</div>
	
	<div class="content">
		
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
	
	</div>
	
	
	

  </div>
</template>

<script>

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {},
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
    console.log(12312)
  }
}
</script>

<style lang="scss" scoped>
		
		.main-content{
			position: relative;
			height: auto;
			width: 100%;
			min-height: 100vh;
			background: #f1f1f1;
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
				flex: 1.5;
				text-align: center;
				line-height: 36px;
				font-size: 14px;
				color: #333;
			}
			
		}
		
	}
	.content{
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
image{
	height: auto;
	width: auto;
}
</style>
