import {HIDE_LOADER, HIDE_PAGE_LOADER, SHOW_LOADER, SHOW_PAGE_LOADER} from "../actions/action_types";

const initial_state = {
    is_open: false,
    page_loader_open: true,

}

const loaderReducer = (state = initial_state, action) => {

    switch (action.type){
        case SHOW_LOADER:
            return {
                ...state,
                is_open: true,
            }
        case HIDE_LOADER:
            return {
                ...state,
                is_open: false,
            }
        case SHOW_PAGE_LOADER:
            return {
                ...state,
                page_loader_open: true,
            }
        case HIDE_PAGE_LOADER:
            return {
                ...state,
                page_loader_open: false
            }
        default:
            return state;
    }
}

export default loaderReducer;
