import {api,requstPost,requstGet} from '@/common/http/index.js';


//export const guessServer = (params = {}) => {
//	return requstGet(api.guessServer, params);
//}




export const commentList = (params = {}) => {
	return requstGet(api.commentList,params);
}


export const commentAdd = (params = {}) => {
	return requstPost(api.commentAdd,params);
}
