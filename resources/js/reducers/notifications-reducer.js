import {CLOSE_NOTIFICATION_BOX, OPEN_NOTIFICATION_BOX} from "../actions/action_types";

const initial_state = {
    notification_type: 'success',
    is_open: false,
    notifications: []
}

const notificationsReducer = (state = initial_state, action) => {
    switch (action.type){
        case OPEN_NOTIFICATION_BOX:{
            return {
                ...state,
                is_open: true,
                notifications: action.notifications,
                notification_type: action.notification_type
            }
        }
        case CLOSE_NOTIFICATION_BOX:{
            return {
                ...state,
                is_open: false,
                notifications: []

            }
        }
        default:
            return state;
    }
}

export default notificationsReducer;