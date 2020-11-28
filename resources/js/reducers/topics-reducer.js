const { LOAD_TOPICS_SUCCESS } = require("../actions/action_types");

const initial_state = [];

const topicsReducer = (state = initial_state, action) => {
    switch (action.type) {
        case LOAD_TOPICS_SUCCESS:
            return [
                ...action.topics,
            ]
    
        default:
            return state;
    }
}

export default topicsReducer;