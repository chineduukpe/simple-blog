import { pharmacareAPI } from "../util/apis"
import { objectToSingleArray } from "../util/helpers";
import { LOAD_BLOGS, LOAD_BLOGS_SUCCESS } from "./action_types"
import { showNotifications } from "./notification_actions";

export const loadBlogs = () => {
    return async dispatch => {
        try {
            const response = await pharmacareAPI.get('blogs');
            dispatch(loadBlogsSuccess(response.data.data))
        } catch (e) {
            console.log(e.response)
            dispatch(showNotifications(objectToSingleArray(e.response.data.errors)))
        }
    }
}

export const loadBlogsSuccess = blogs => {
    return {
        type: LOAD_BLOGS_SUCCESS,
        blogs
    }
}