import { USER_TOPICS_LOADED } from "../actions/action_types";

const initial_state = [

]

 const userTopicsReducer = (state = initial_state,action) => {
    switch (action.type) {
        case USER_TOPICS_LOADED:
            return [
                ...action.topics
            ]
    
        default:
            return state;
    }
}

export default userTopicsReducer;