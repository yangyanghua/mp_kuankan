import {api,requstPost,requstGet} from '@/common/http/index.js';


//export const guessServer = (params = {}) => {
//	return requstGet(api.guessServer, params);
//}




export const getUserDetail = (params = {}) => {
	return requstGet(api.getUserDetail,params);
}


export const getDynamicList = (params = {}) => {
	return requstGet(api.getDynamicList,params);
}

export const cityList = (params = {}) => {
	return requstGet(api.cityList,params);
}

export const countryList = (params = {}) => {
	return requstGet(api.countryList,params);
}


