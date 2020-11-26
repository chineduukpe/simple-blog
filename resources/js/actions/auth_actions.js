import axios from 'axios'
import { pharmacareAPI } from '../util/apis'

import {hideLoader, showLoader, showNotifications} from "./";
import {objectToSingleArray} from "../util/helpers";
import {AUTHENTICATION_SUCCESS, SIGNOUT_SUCCESS} from "./action_types";
import { userTopicsLoaded } from './topic_interest_actions';

export const attemptSignup = data => {
    return async dispatch => {
        dispatch(showLoader());
        try {
            const response = await pharmacareAPI.post('/register',data);
            dispatch(showNotifications(response.data.message,'success'))
        }catch (e) {
            dispatch(showNotifications(objectToSingleArray(e.response.data.errors),'error'))
        }
        finally {
            dispatch(hideLoader())
        }

    }
}

export const attemptLogin = data => {

    return async dispatch => {
        dispatch(showLoader())
        try {
            const response = await pharmacareAPI.post('login',data);
            console.log(response.data)
            const {user, access_token } = response.data;
            dispatch(showNotifications(response.data.message,'success'));
            localStorage.setItem('pc_user',JSON.stringify({user: user, access_token: access_token}));
            dispatch(authenticationSuccess({user, access_token}))
            console.log('topics', user.user.topics)
            dispatch(userTopicsLoaded(user.user.topics))
        }catch (e) {
            console.log(e)
            dispatch(showNotifications(objectToSingleArray(e.response.data.errors),'error'));
        }
        finally {
            dispatch(hideLoader());
        }
    }
}

export const authenticationSuccess = user => {
    return {
        type: AUTHENTICATION_SUCCESS,
        user,
        is_authenticated: true,
    }
}

export const attemptSignout = () => {
    return async dispatch => {
        dispatch(showLoader())
        try {
        const response = await pharmacareAPI.post('/logout');
        console.log(response)
        dispatch(showNotifications(response.data.message,'success'))
            localStorage.clear()
            dispatch(signoutSuccess())

        }catch (e) {
            console.log(e.response)
            dispatch(showNotifications(e.response.data.errors))
        }
        finally {
            dispatch(hideLoader())
        }
    }
}

export const signoutSuccess = () => {
    return {
        type: SIGNOUT_SUCCESS
    }
}
