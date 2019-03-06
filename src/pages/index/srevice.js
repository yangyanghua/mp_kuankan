import {api,requstPost,requstGet} from '@/common/http/index.js';
import qs from 'qs';

//export const guessServer = (params = {}) => {
//	return requstGet(api.guessServer, params);
//}




export const findListMap = (params = {}) => {
	return requstPost(api.findListMap,qs.stringify(params));
}

export const findList = (params = {}) => {
	return requstPost(api.findList,qs.stringify(params));
}

export const hotList = (params = {}) => {
	return requstPost(api.hotList,qs.stringify(params));
}


export const hotListMap = (params = {}) => {
	return requstPost(api.hotListMap,qs.stringify(params));
}

export const followListMap = (params = {}) => {
	return requstPost(api.followListMap,qs.stringify(params));
}


export const followList = (params = {}) => {
	return requstPost(api.followList,qs.stringify(params));
}