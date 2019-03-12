import {api,requstPost,requstGet} from '@/common/http/index.js';


export const getDetail = (params = {}) => {
	return requstGet(api.getDetail, params);
}




//export const fansList = (params = {}) => {
//	return requstPost(api.fansList,params);
//}

