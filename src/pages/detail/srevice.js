import {api,requstPost,requstGet} from '@/common/http/index.js';


export const getDetail = (params = {}) => {
	return requstGet(api.getDetail, params);
}

export const goodAdd = (params = {}) => {
	return requstPost(api.goodAdd,params);
}

export const cancleAdd = (params = {}) => {
	return requstPost(api.cancleAdd,params);
}

export const collection = (params = {}) => {
	return requstPost(api.collection,params);
}

export const collectionCancle = (params = {}) => {
	return requstPost(api.collectionCancle,params);
}
export const commentAdd = (params = {}) => {
	return requstPost(api.commentAdd,params);
}

export const score = (params = {}) => {
	return requstPost(api.score,params);
}


export const dynamicReport = (params = {}) => {
	return requstPost(api.dynamicReport,params);
}

