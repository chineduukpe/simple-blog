import {HIDE_LOADER, HIDE_PAGE_LOADER, SHOW_LOADER, SHOW_PAGE_LOADER} from "./action_types";

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}

export const hideLoader = () => {
    return {
        type: HIDE_LOADER,
    }
}

export const showPageLoader = () => {
    return {
        type: SHOW_PAGE_LOADER
    }
}

export const hidePageLoader = () => {
    return {
        type: HIDE_PAGE_LOADER
    }
}
