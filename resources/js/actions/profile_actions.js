import { pharmacareAPI } from "../util/apis"
import { objectToSingleArray } from "../util/helpers";
import { setAuthenticatedUser } from './'
import { CHANGE_PROFILE_NAME } from "./action_types";
import { showNotifications } from "./notification_actions";

export const changeProfileImage = image => {
    
    const formData = new FormData();
    formData.append('image',image);
    return async dispatch => {
        try {
            const response = await pharmacareAPI.post('/user/profile/image',formData);
            const access_token = JSON.parse(localStorage.getItem('pc_user'))['access_token'];
            const $user = {user: response.data.user,access_token}
            dispatch(setAuthenticatedUser($user))
        } catch (e) {
            console.log(e.response)
            dispatch(showNotifications(objectToSingleArray(e.response.data.errors)))
        }
    }
}


export const changeProfileName = name => {
    return async dispatch => {
        try {
            const response = await pharmacareAPI.post('user/profile',{name},{});
            const access_token = JSON.parse(localStorage.getItem('pc_user'))['access_token'];
            const $user = {user: response.data.user,access_token}
            dispatch(setAuthenticatedUser($user))
            dispatch(showNotifications(response.data.messages))
        } catch (e) {
            dispatch(showNotifications(objectToSingleArray(e.response.data.errors)))
        }
        // return {
        //     type: CHANGE_PROFILE_NAME,
        //     name
        // }
    }
}