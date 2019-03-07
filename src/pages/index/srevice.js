import {api,requstPost,requstGet} from '@/common/http/index.js';


//export const guessServer = (params = {}) => {
//	return requstGet(api.guessServer, params);
//}




export const findListMap = (params = {}) => {
	return requstPost(api.findListMap,params);
}

export const findList = (params = {}) => {
	return requstGet(api.findList,params);
}

export const hotList = (params = {}) => {
	return requstGet(api.hotList,params);
}


export const hotListMap = (params = {}) => {
	return requstPost(api.hotListMap,params);
}

export const followListMap = (params = {}) => {
	return requstPost(api.followListMap,params);
}


export const followList = (params = {}) => {
	return requstGet(api.followList,params);
}