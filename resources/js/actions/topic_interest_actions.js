import { pharmacareAPI } from "../util/apis"
import { ADD_NEW_TOPIC_INTEREST, ADD_TOPIC_INTEREST_SUCCESS, USER_TOPICS_LOADED } from "./action_types"
import { showNotifications } from "./notification_actions"

export const addTopicInterest = (topic_id) =>{
    console.log('adding topic with ID', topic_id)
    return async dispatch => {
        try {
            const response = await pharmacareAPI.post('user/topics',{topic_id});
            const {messages, topics} = response.data
            dispatch(addTopicInterestSuccess(messages,topics))
        } catch (error) {
            dispatch(showNotifications(response.data.errors))
        }
    }
} 

export const removeTopicInterest = (topic_id) =>{
    return {
        type: ADD_NEW_TOPIC_INTEREST,
        topic_id
    } 
} 

export const addTopicInterestSuccess = (topics,messages) => {
    return dispatch => {
        dispatch(showNotifications(messages))
        dispatch(userTopicsLoaded(topics))

    }
}

export const addTopicInterestFail = () => {
    return {
        type: ADD_TOPIC_INTEREST_FAIL
    }
}


export const userTopicsLoaded = topics => {
    return {
        type: USER_TOPICS_LOADED,
        topics
    }
}