import {AUTHENTICATION_SUCCESS, CHANGE_PROFILE_NAME, SIGNOUT_SUCCESS} from "../actions/action_types";

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
        case CHANGE_PROFILE_NAME:
            return {
                ...state,
                authenticated_user: {
                    ...state.authenticated_user,
                    user: {
                        name: action.name
                    }
                }
            }

        default:
            return state;
    }
}

export default authReducer;
