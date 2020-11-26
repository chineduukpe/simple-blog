import { combineReducers } from 'redux'
import authReducer from './auth-reducer'
import notificationsReducer from './notifications-reducer'
import loaderReducer from './loader-reducer'
import userTopicsReducer from './user-topics-reducer'

export default combineReducers({
    auth: authReducer,
    notifications: notificationsReducer,
    loader: loaderReducer,
    userTopics: userTopicsReducer
})