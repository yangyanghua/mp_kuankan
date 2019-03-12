import {api,requstPost,requstGet} from '@/common/http/index.js';


//export const guessServer = (params = {}) => {
//	return requstGet(api.guessServer, params);
//}





export const feedback = (params = {}) => {
	return requstPost(api.feedback,params);
}

