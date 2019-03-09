import {api,requstPost,requstGet} from '@/common/http/index.js';


//export const guessServer = (params = {}) => {
//	return requstGet(api.guessServer, params);
//}




export const fansList = (params = {}) => {
	return requstPost(api.fansList,params);
}


export const followFansList = (params = {}) => {
	return requstPost(api.followFansList,params);
}

export const addFriend = (params = {}) => {
	return requstPost(api.addFriend,params);
}

export const cancleFriend = (params = {}) => {
	return requstPost(api.cancleFriend,params);
}
