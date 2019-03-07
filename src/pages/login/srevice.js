import {api,requstPost,requstGet} from '@/common/http/index.js';
import qs from 'qs';

//export const guessServer = (params = {}) => {
//	return requstGet(api.guessServer, params);
//}



export const phoneLogin = (params = {}) => {
	return requstPost(api.phoneLogin,qs.stringify(params));
}

export const getCode = (params = {}) => {
	return requstPost(api.getCode,qs.stringify(params));
}

