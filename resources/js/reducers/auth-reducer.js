import {AUTHENTICATION_SUCCESS, SIGNOUT_SUCCESS} from "../actions/action_types";

const initial_state = {
    is_authenticated: false,
    is_authenticating: false,
    authenticated_user: {
        topics: []
    }
}


const authReducer = (state = initial_state, action) => {
    switch (action.type){
        case AUTHENTICATION_SUCCESS:
            return{
                ...state,
                is_authenticated: action.is_authenticated,
                authenticated_user: action.user,
            }
        case SIGNOUT_SUCCESS:
            return {
                ...state,
                is_authenticated: false,
                authenticated_user: {}
            }
        default:
            return state;
    }
}

export default authReducer;
