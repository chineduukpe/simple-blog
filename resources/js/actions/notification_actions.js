import {CLOSE_NOTIFICATION_BOX, OPEN_NOTIFICATION_BOX} from "./action_types";

export const showNotifications = (notifications, notification_type = 'success') => {
    return {
        notifications,
        notification_type,
        type: OPEN_NOTIFICATION_BOX

    }
}

export const closeNotifications = () => {
    return {
        type: CLOSE_NOTIFICATION_BOX,
    }
}