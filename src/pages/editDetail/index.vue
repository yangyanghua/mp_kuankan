<template>
  <div class="main-content">

	<div class="header">
		<ul class="nav-list">
			<li class="left-btn">
			</li>
			<li class="nav-item">编辑足迹</li>

			<li class="right-btn">
				   公开
					<image class="icon_down" src="../../static/images/icon_lower.png"/>
			</li>
			<li class="right-btn submitbtn">
					发布
			</li>
		</ul>		
	</div>
	
	<div class="content">

		<div class="title-input">
			 <textarea class="title-txt"   placeholder="不要超过60个字符" maxlength="60" />
		</div>
	
		<div class="content-input">
			 <textarea class="content-txt"  auto-height  placeholder="不要超过2000个字符" maxlength="2000" />
		</div>

		<ul class="photo-list">
			<li class="photo-item" >
				<div class="title-info">
					<p class="index-box">1/1</p>
					<p class="date-info">拍摄于&nbsp;&nbsp;2018-11-09 17:50</p>
					<p class="delete-btn"><image class="icon_del" src="../../static/images/icon_delete_circular.png"/></p>
				</div>
				 <div class="phono-info">
				 	
				 	<div class="photo-box">
				 		<image class="photo" src="../../static/images/img3.jpg"/>
				 		<button class="setBg" hover-class="active" >设为封面</button>
				 	</div>
				 	
				 	<div class="photo-ms">
				 		<textarea class="ms-txt"   placeholder="不要超过280个字符" maxlength="280" />
				 	</div>
				 </div>
				<p class="address"><image class="icon_edit" src="../../static/images/icon_edit.png"/>中国.广东省.广州市.海珠区.南州街道.见面亭</p>
			</li>
			
			<li class="photo-item" >
				<div class="title-info">
					<p class="index-box">1/1</p>
					<p class="date-info">拍摄于&nbsp;&nbsp;2018-11-09 17:50</p>
					<p class="delete-btn"><image class="icon_del" src="../../static/images/icon_delete_circular.png"/></p>
				</div>
				 <div class="phono-info">
				 	
				 	<div class="photo-box">
				 		<image class="photo" src="../../static/images/img3.jpg"/>
				 		<button class="setBg" hover-class="active" >设为封面</button>
				 	</div>
				 	
				 	<div class="photo-ms">
				 		<textarea class="ms-txt"   placeholder="不要超过280个字符" maxlength="280" />
				 	</div>
				 </div>
				<p class="address"><image class="icon_edit" src="../../static/images/icon_edit.png"/>中国.广东省.广州市.海珠区.南州街道.见面亭</p>
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
      ADestinceAngle_B:null,
      imgUrls: [
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/management-school-picture/7683b32e-4e44-4b2f-9c03-c21f34320870'
      ]
    }
  },

  created () {
  	
  	
				/**
				 * 度换成弧度
				 * @param  {Float} d  度
				 * @return {[Float}   弧度
				 */
				let  LIB = {};
				
				LIB.rad = function (d) {
				  return d * Math.PI / 180.0;
				}
				 
				/**
				 * 弧度换成度
				 * @param  {Float} x 弧度
				 * @return {Float}   度
				 */
				LIB.deg = function (x) {
				  return x * 180 / Math.PI;
				}
				 
				 this.ADestinceAngle_B = function (lonlat, brng, dist) {
				    var u = this;
				    var ct = {
				      a: 6378137,
				      b: 6356752.3142,
				      f: 1 / 298.257223563
				    };
				    var a = ct.a, b = ct.b, f = ct.f;
				 
				    var lon1 = lonlat.lon * 1;  //乘一（*1）是为了确保经纬度的数据类型为number
				    var lat1 = lonlat.lat * 1;
				 
				    var s = dist;
				    var alpha1 = LIB.rad(brng);
				    var sinAlpha1 = Math.sin(alpha1);
				    var cosAlpha1 = Math.cos(alpha1);
				 
				    var tanU1 = (1 - f) * Math.tan(LIB.rad(lat1));
				    var cosU1 = 1 / Math.sqrt((1 + tanU1 * tanU1)), sinU1 = tanU1 * cosU1;
				    var sigma1 = Math.atan2(tanU1, cosAlpha1);
				    var sinAlpha = cosU1 * sinAlpha1;
				    var cosSqAlpha = 1 - sinAlpha * sinAlpha;
				    var uSq = cosSqAlpha * (a * a - b * b) / (b * b);
				    var A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
				    var B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
				 
				    var sigma = s / (b * A), sigmaP = 2 * Math.PI;
				    while (Math.abs(sigma - sigmaP) > 1e-12) {
				      var cos2SigmaM = Math.cos(2 * sigma1 + sigma);
				      var sinSigma = Math.sin(sigma);
				      var cosSigma = Math.cos(sigma);
				      var deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) -
				        B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)));
				      sigmaP = sigma;
				      sigma = s / (b * A) + deltaSigma;
				    }
				 
				    var tmp = sinU1 * sinSigma - cosU1 * cosSigma * cosAlpha1;
				    var lat2 = Math.atan2(sinU1 * cosSigma + cosU1 * sinSigma * cosAlpha1,
				      (1 - f) * Math.sqrt(sinAlpha * sinAlpha + tmp * tmp));
				    var lambda = Math.atan2(sinSigma * sinAlpha1, cosU1 * cosSigma - sinU1 * sinSigma * cosAlpha1);
				    var C = f / 16 * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha));
				    var L = lambda - (1 - C) * f * sinAlpha *
				      (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
				    var revAz = Math.atan2(sinAlpha, -tmp);  // final bearing
				    var lon_destina = lon1 * 1 + LIB.deg(L);
				    var lonlat_destination = {lon: lon_destina, lat: LIB.deg(lat2)};
				 
				    return lonlat_destination;
				  }
  	
  				 var coord1 = this.ADestinceAngle_B({lon:114,lat:38},45,100)
  				 var coord2 = this.ADestinceAngle_B({lon:114,lat:38},135,100) 
  				  
  				console.log(coord1);
  				console.log(coord2);
  }
}
</script>

<style  lang="scss" scoped >
		.main-content{
			position: relative;
			height: auto;
			width: 100%;
			padding-top: 46px;
			box-sizing: border-box;
			min-height: 100vh;
			background: #F1F1F1;
		}


	
	.content{
		background: none;
		height: auto;
		width: 100%;
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
			.left-btn{
				flex: 2;
			}
			
			.right-btn{
				flex: 1;
				line-height: 36px;
				font-size: 12px;
				text-align: center;
				&.submitbtn{
					color: #FF5B40;
					text-align: right;
				}
				.icon_down{
					height: 7px;
					width: 8px;
				}
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
	.title-input{
		height: 70px;
		padding: 10px;
		width: 100%;
		box-sizing: border-box;
		background: #fff;
		.title-txt{
			padding: 5px;
			height: 100%;
			width: 100%;
			box-sizing: border-box;
			border-radius:4px;
			font-size: 12px;
			border: 1px solid #F1F1F1;
		}
	}

	.content-input{
		min-height: 110px;
		padding:10px;
		padding-top: 0;
		width: 100%;
		box-sizing: border-box;
		background: #fff;
		.content-txt{
			padding: 5px;
			min-height: 90px;
			height: auto;
			width: 100%;
			box-sizing: border-box;
			border-radius:4px;
			font-size: 12px;
			border: 1px solid #F1F1F1;
		}
	}

	.photo-list{
		width: 100%;
		height: auto;
		box-sizing: border-box;
		margin-top: 10px;
	}

	.photo-item{
		padding: 10px;
		background: #fff;		
		min-height: 120px;
		height: auto;
		box-sizing: border-box;
		width: 100%;
		margin-bottom: 10px;
		.title-info{
			height: 26px;
			line-height: 26px;
			width: 100%;
			font-size: 12px;
			color: #999;
			display: flex;
			.index-box{
				flex: 2;
				text-align: left;
			}
			.date-info{
				flex: 6;
				text-align: right;
			}
			.delete-btn{
				flex: 1;
				text-align: right;
				.icon_del{
					height: 16px;
					width: 16px;
					float: right;
					margin-top: 5px;
				}
			}
		}
		
		.phono-info{
			height: 100px;
			display: flex;
			.photo-box{
				flex: 1;
				padding-right: 10px;
				box-sizing: border-box;
				.photo{
					 height: 75px;
					 width: 100%;
				}
				.setBg{
					width: 100%;
					height: 22px;
					line-height: 22px;
					text-align: center;
					box-sizing: border-box;
					border: 1px solid #F1F1F1;
					border-radius:4px;
					background: none;
					font-size: 10px;
				}
			}
			.photo-ms{
				flex: 3;
				box-sizing: border-box;
				.ms-txt{
					height: 100%;
					width: 100%;
					font-size: 12px;
					border: 1px solid #F1F1F1;
					box-sizing: border-box;
					padding: 5px;
					border-radius:4px;
				}
			}
		}
		
		.address{
			min-height: 20px;
			padding: 10px 0;
			font-size: 12px;
			color: #007AFF;
			.icon_edit{
				height: 15px;
				width: 15px;
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
