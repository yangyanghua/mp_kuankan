<template>
  <div class="main-content">


	
	<div class="content">

			<div class="logoContent">
				<image class="logo-img" mode="widthFix" src="../../static/images/quick2x.png"/>
			</div>
			<div class="loginFrom">
				<form class="formdata" >
				<div class="phone">
					<span id="phoneType">+86</span>
					<div class="input-box">
						<input type="number" class="inputs" v-model="form.mobile"  placeholder="手机号" />	
					</div>
					</div>
					<div class="code">		
					<input type="number" class="inputs" v-model="form.code"  placeholder="验证码" />
					
					<button class="getCodeBtn"   v-bind:class="{'disabled-status':btnDisabled}" hover-class="active" @tap="_getCode" :disabled="btnDisabled"  >{{btnTxt}}</button>
					
					</div>
					
					<div class="btnContent">
						<button    hover-class="active" @tap="onSubmit" class="btn sBtn">登录</button>
						<button  hover-class="active" @tap="onColse" class="btn reBtn">取消</button>	
					</div>
				</form>
				<div class="otherLogin">
					<p class="wtitle">微信登录</p>
					<ul class="wayList">
						<li class="wayItem ">
									<image class="weixLogo" mode="widthFix" src="../../static/images/icon_wechat.png"/>
						</li>		
					</ul>			
				</div>
				
			</div>



	</div>



  </div>
</template>

<script>

import {phoneLogin,getCode} from './srevice.js'
export default {
  data () {
    return {
      logs: [],
      form:{
      	mobile:'',
      	code:'',
      	lang:'zh'
      },
      btnDisabled:false,
      btnTxt:'发送验证码',
      imgUrls: [
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/management-school-picture/7683b32e-4e44-4b2f-9c03-c21f34320870'
      ]
    }
  },

  methods: {
  	onColse(){
 								wx.navigateBack({
									delta: 1
								})		 		
  	},
  	onSubmit(){
  		
				if(!this.form.mobile) {
					wx.showToast({
						title: '请输入你的手机号！',
						icon: 'none',
					});
					return false;
				};

				if(this.form.mobile.length != 11) {
					wx.showToast({
						title: '请输入正确的手机号！',
						icon: 'none',
					});
					return false;
				};  		
				if(!this.form.code) {
					wx.showToast({
						title: '请输入验证码！',
						icon: 'none',
					});
					return false;
				};
			this._phoneLogin(this.form);
  	},
  	
  	_phoneLogin(opt){

				wx.showLoading({
					mask: true,
					title: '登录中...'
				});		

  		phoneLogin(opt).then((res)=>{
  			
					wx.hideLoading();
					wx.showToast({
						title: '登录成功',
						icon: 'success',
					});  				
			
					wx.setStorage({
						key: 'userInfo',
						data: JSON.stringify(res),
						success: function(res3) {
							
							//	store.commit('setIsBrack', false);
								wx.navigateBack({
									delta: 1
								})							
							
						},
						fail: function(res3) {
							console.log(res3);
						}
					});

  		}).catch((res)=>{
  			
 					wx.showToast({
						title: res.message,
						icon: 'none',
					}); 			
  			
  		})
  		
  	},
  	
  	_getCode(){
				if(!this.form.mobile) {
					wx.showToast({
						title: '请输入你的手机号！',
						icon: 'none',
					});
					return false;
				};

				if(this.form.mobile.length != 11) {
					wx.showToast({
						title: '请输入正确的手机号！',
						icon: 'none',
					});
					return false;
				};

				let vm = this;
				this.btnDisabled = true;
				let obj  = {
					mobile:vm.form.mobile,
					smsCountryCode:'86',
					lang:'zh'		
				}
				
				getCode(obj).then((res) => {

					let t = 60;
					let Interval = setInterval(function() {
						t--;
						vm.btnTxt = '(' + t + ')重新获取';
						if(t == 0) {
							vm.btnTxt = '发送验证码';
							vm.btnDisabled = false;
							clearInterval(Interval);
						}
					}, 1000)

					wx.showToast({
						title: '验证码已发送',
						icon: 'none',
					});

				}).catch((error) => {

					this.btnDisabled = false;
					wx.showToast({
						title: res.message,
						icon: 'none',
					});
				})


  	}
  	
  	
  }
}
</script>

<style  lang="scss" scoped >
		.main-content{
			position: relative;
			width: 100%;
			box-sizing: border-box;
			height: 100vh;
			overflow: hidden;
			background: #F1F1F1;
		}

	.content{
		background: none;
		height: auto;
		width: 100%;
	}
	
.logoContent{
	box-sizing: border-box;
	height: 90px;
	width: 100%;
	text-align: center;
	padding-top: 60px;
}
.logoContent .logo-img{
    height:80px;
    width: 160px;
}
.loginFrom{
	position: relative;
	box-sizing: border-box;
	width: 100%;
	padding: 0.89rem;
	margin-top: 40px;
}

.loginFrom .formdata{
	display: block;
}

.loginFrom .phone{
	position: relative;
	display: flex;
	width: 100%;
	height: 41px;
	border-bottom: 1px solid #AAAAAA;
}


.loginFrom .phone #phoneType{
	position: relative;
	text-align: right;
	font-size: 14px;
	flex: 1;
	padding: 0;
	height: 40px;
	line-height: 40px;
	padding-left: 0.3rem;
	background: none;
	outline: none;
	border: none;
	padding-right: 10px;
}
.loginFrom .phone #phoneType::after{
	content: '';
	width: 1px;
	height: 0.3rem;
	position: absolute;
	top: 50%;
	margin-top: -0.15rem;
	right:0;
	background: gainsboro;
}


.loginFrom .phone .input-box{
	flex: 8;

	padding: 0;
	padding-left: 10px;
	margin: 0;
	.inputs{
		background: none;
		border: none;
		outline: none;		
		height: 40px;
		line-height: 40px;
		font-size: 12px;		
	}
}
 .loginFrom .code{
 	margin-top: 0.3rem;
 	display: flex;
	width: 100%;
	height: 41px;
	border-bottom: 1px solid #AAAAAA;	
 }
 .loginFrom .code .inputs{
	 	flex: 1;
	 	border: none;
	 	background: none;
	 	outline: none;
	 	font-size: 12px;
	 	height: 40px;
	 	line-height: 40px;
	 	box-sizing: border-box;
	 	padding-left: 10px;
 }
 .loginFrom .code .getCodeBtn{
 	flex: 0.8;
 	border: none;
 	background: none;
 	height: 40px;
 	line-height: 40px;
 	outline: none;
 	color: #FF5B40;
 	padding: 0;
 	text-align: right;
 	font-size: 12px;
 	&.disabled-status{
 		color: #999;
 	}
 }
.btnContent{
	width: 100%;
	text-align: center;
	margin-top: 1rem;
} 
.btnContent .btn{
	padding-top:0 ;
	padding-bottom: 0;
	height: 36px;
	line-height: 36px;
	width:120px;
	text-align: center;
	border: none;
	box-sizing: border-box;
	border-radius:100px;
	font-size: 14px;
}
.btnContent .btn.sBtn{
	display: inline-block;
	background: #FF5B40;
	color: #FFFFFF;
	border: 1px solid #FF5B40;
	margin-right: 20px;;
}
.btnContent .btn.reBtn{
	display: inline-block;
	background: #FFFFFF ;
	color: #666666;
	border: 1px solid #FF5B40;
	margin-right: 0.1rem;
}
.otherLogin{
	width: 100%;
	margin-top: 2.4rem;
}
.otherLogin .wtitle{
	width: 100%;
	position: relative;
	font-size: 12px;
	text-align: center;
	color:#cecece;
}
.otherLogin .wtitle::after{
	content: '';
	position: absolute;
	width:35%;
	height: 1px;
	background:#cecece;
	top: 50%;
	right: 0;
}
.otherLogin .wtitle::before{
	content: '';
	position: absolute;
	width:35%;
	height: 1px;
	background:#cecece;
	top: 50%;
	left: 0;
}
.otherLogin .wayList{
	box-sizing: border-box;
	width: 100%;
	height: 1.5rem;
	display: flex;
	padding-top: 0.5rem;
}
.otherLogin .wayList .wayItem{
	flex: 1;
}



.otherLogin .wayList .wayItem .weixLogo{
	display: block;
	height: 40px;
	width: 40px;
	margin: auto;
}

	
	button::after {
		border: none;
	}
	
	button.active {
		opacity: .7;
	}
	
</style>
