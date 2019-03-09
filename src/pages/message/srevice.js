import {api,requstPost,requstGet} from '@/common/http/index.js';


//export const guessServer = (params = {}) => {
//	return requstGet(api.guessServer, params);
//}




export const messageCenter = (params = {}) => {
	return requstGet(api.messageCenter,params);
}


