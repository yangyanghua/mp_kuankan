
var httpService = "";
const development = true;
const production = false;
const test = false;
if(development) {
	httpService = 'http://pred-api.irenao.cn'; //测试
}else if(test){
	httpService = 'http://sit-api.irenao.cn'; //预生产
}else if(production) {
	httpService = 'http://api.irenao.cn'; //生产
}

const requstGet = function(url, data, header) {
	return requst(httpService + url, 'GET', data, header)
}

const requstPost = function(url, data, header) {
	return requst(httpService + url, 'POST', data, header);
}

//封装Request请求方法  

function requst(url, method, data = {}, header = 'application/x-www-form-urlencoded;charset=UTF-8;') {
	wx.showNavigationBarLoading();
    
	return new Promise((resove, reject) => {

		//获取当前路由
//		data.method = method
		wx.request({
			url: url,
			data: data,
			header: {
				'Content-Type': header
			},
			method: method.toUpperCase(), // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
			success: function(res) {
				wx.hideNavigationBarLoading();
					if(res){
						resove(res.data)
					}else{
						let err = {
							code: -1,
							message: '网络或系统错误'
						}							
						reject(err)
					}
				
			},
			fail: function(msg) {
				wx.hideNavigationBarLoading()
						let err = {
							code: -1,
							message: '网络或系统错误'
						}				
				reject(err)
			}
		})
	})
}
export {
	requstGet,
	requstPost,
	httpService
}