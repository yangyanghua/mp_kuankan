import {api,requstPost,requstGet} from '@/common/http/index.js';


//export const guessServer = (params = {}) => {
//	return requstGet(api.guessServer, params);
//}





export const regionList = (params = {}) => {
	return requstGet(api.regionList,params);
}



