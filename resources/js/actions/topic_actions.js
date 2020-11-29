const { pharmacareAPI } = require("../util/apis")
const { LOAD_TOPICS, LOAD_TOPICS_SUCCESS } = require("./action_types");
const { showNotifications } = require("./notification_actions");

export const loadTopics = () => {
    return async dispatch => {
        try {
            const response = await pharmacareAPI.get('/topics');
            dispatch(loadTopicsSuccess(response.data.data))
        } catch (e) {
            dispatch(showNotifications(['Could not load fresh topics'],'error'))
        }
    }
}


export const loadTopicsSuccess = topics => {
    return {
        type: LOAD_TOPICS_SUCCESS,
        topics
    }
}