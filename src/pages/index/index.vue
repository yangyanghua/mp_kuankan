<template>
  <div class="main-content">
	
	<div class="header">
		<ul class="nav-list">
			<li class="left-btn"></li>
			<li class="nav-item">关注</li>
			<li class="nav-item">发现</li>
			<li class="nav-item">热门</li>
			<li class="right-btn"></li>
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
			background: #0000FF;
		}

	.header{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		height: 46px;
		width: 100%;
		.nav-list{
			width: 100%;
			height: 46px;
			display: flex;
			.left-btn,.right-btn{
				flex: 1;
			}
			
			.nav-item{
				flex: 1;
				text-align: center;
				line-height: 46px;
				font-size: 12px;
				color: #333;
			}
			
		}
		
	}






</style>
