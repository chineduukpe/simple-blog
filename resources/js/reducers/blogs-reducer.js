const { LOAD_BLOGS_SUCCESS } = require("../actions/action_types");

const initial_state = [

];

const blogsReducer = (state = initial_state, action) => {
    
    switch (action.type) {
        case LOAD_BLOGS_SUCCESS:
            return [
                ...action.blogs
            ]
                
        default:
            return state;
    }
}

export default blogsReducer;