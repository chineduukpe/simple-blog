import { combineReducers } from 'redux'
import authReducer from './auth-reducer'
import notificationsReducer from './notifications-reducer'
import loaderReducer from './loader-reducer'
import userTopicsReducer from './user-topics-reducer'
import topicsReducer from './topics-reducer'
import blogsReducer from './blogs-reducer'
import uiReducer from './ui-reducer'

export default combineReducers({
    auth: authReducer,
    notifications: notificationsReducer,
    loader: loaderReducer,
    userTopics: userTopicsReducer,
    topics: topicsReducer,
    blogs: blogsReducer,
    ui: uiReducer
})