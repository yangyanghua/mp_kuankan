import {api,requstPost,requstGet} from '@/common/http/index.js';


//export const guessServer = (params = {}) => {
//	return requstGet(api.guessServer, params);
//}




export const searchUser = (params = {}) => {
	return requstPost(api.searchUser,params);
}
export const searchFriend = (params = {}) => {
	return requstPost(api.searchFriend,params);
}
export const addFriend = (params = {}) => {
	return requstPost(api.addFriend,params);
}

export const cancleFriend = (params = {}) => {
	return requstPost(api.cancleFriend,params);
}
