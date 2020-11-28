const { OPEN_DASHBOARD_NAVIGATION, CLOSE_DASHBOARD_NAVIGATION, TOGGLE_DASHBOARD_NAV } = require("../actions/action_types");

const initial_state = {
    dashboard_nav_open: false,
}

const uiReducer = (state = initial_state, action) => {
    console.log(state)
    switch (action.type) {
        case TOGGLE_DASHBOARD_NAV:
            return {
                ...state,
                dashboard_nav_open: !state.dashboard_nav_open,
            }
        default:
            return state;
    }
}

export default uiReducer;