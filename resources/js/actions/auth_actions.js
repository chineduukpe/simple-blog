import axios from 'axios'
import { pharmacareAPI } from '../util/apis'

import {hideLoader, showLoader, showNotifications} from "./";
import {objectToSingleArray} from "../util/helpers";
import {AUTHENTICATION_SUCCESS, SIGNOUT_SUCCESS} from "./action_types";
import { userTopicsLoaded } from './topic_interest_actions';

export const attemptSignup = (data, ownProps) => {
    return async dispatch => {
        dispatch(showLoader());
        try {
            const response = await pharmacareAPI.post('/register',data);
            dispatch(showNotifications(response.data.message,'success'))
            dispatch(setAuthenticatedUser(response.data.user))
            ownProps.history.push('/select-topics');

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
            const {user, access_token } = response.data;
            dispatch(showNotifications(response.data.message,'success'));
            dispatch(setAuthenticatedUser({user, access_token}))
            dispatch(userTopicsLoaded(user.user.topics))
        }catch (e) {
            dispatch(showNotifications(objectToSingleArray(e.response.data.errors),'error'));
        }
        finally {
            dispatch(hideLoader());
        }
    }
}

export const setAuthenticatedUser = user => {
    localStorage.setItem('pc_user',JSON.stringify({user: user.user, access_token: user.access_token}));
    return {
        type: AUTHENTICATION_SUCCESS,
        user,
        is_authenticated: true,
    }
}

export const attemptSignout = ownProps => {
    return async dispatch => {
        dispatch(showLoader())
        try {
        const response = await pharmacareAPI.post('/logout');
        ownProps.history.push('/');
        dispatch(showNotifications(response.data.message,'success'))
            localStorage.clear()
            dispatch(signoutSuccess())
        }catch (e) {
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
