<template>
  <div class="main-content">


	
	<div class="content">

		<div class="input-box">
			<textarea class="ms-txt" auto-height v-model="form.content"   placeholder="请输入您的反馈意见，我们将不断改进"  />
		</div>

		<div class="input-box">
			<input class="e-mail" v-model="form.email" type="text" placeholder="请输入您的邮箱"  />
		</div>

		<div class="btn-box">
			<button class="btnB"  @tap="sendMsg"   hover-class="active" >发送</button>
		</div>

	</div>



  </div>
</template>

<script>
import {feedback} from './srevice.js';
export default {

  data () {
    return {
    	
    	form:{
    		title:'',
    		email:'',
    		content:''
    	},
    	
    	
    }
  },

		methods:{
		sendMsg(){
				if(!this.form.content) {
					wx.showToast({
						title: '请输入您的反馈意见',
						icon: 'none',
					});
					return false;
				};
				
				this.form.title = this.form.content;
				feedback(this.form).then((res)=>{
					wx.showToast({
						title: '发送成功，感谢您的反馈。',
						icon: 'none',
					});					
					setTimeout(function(){
						wx.navigateBack({
						  delta: 1
						})						
					},1500)
				}).catch((res)=>{
					
					wx.showToast({
						title: res.message,
						icon: 'none',
					});					
					
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
	
	.input-box{
		height: auto;
		width: 100%;
		background: none;
		box-sizing: border-box;
		padding: 10px;
		.ms-txt{
			min-height: 100px;
			width: 100%;
			font-size: 12px;
			line-height: 20px;
			padding: 5px;
			box-sizing: border-box;
			border-radius:4px;
			background: #fff;
		}
		.e-mail{
			height: 36px;
			line-height: 36px;
			border-radius:4px;
			width: 100%;
			box-sizing: border-box;
			padding:0 5px;
			font-size: 12px;
			background: #fff;
		}
	}

	.btn-box{
		height: 60px;
		width: 100%;
		margin-top: 10px;
		text-align: center;
		.btnB{
			background: #FF5B40;
			font-size: 12px;
			color: #fff;
			width: 50%;
			text-align: center;
			height: 36px;
			line-height: 36px;
			border-radius: 4px;
		}
	}
	
	button::after {
		border: none;
	}
	
	button.active {

		background-color:#f6f6f6 !important;
	}
	
</style>
