import React, { useState, useEffect } from 'react';

const Notification = (props) => {
    const {notifications, notification_type, is_open } = props.notifications;

    const renderAlerts = () => {
        if (!notifications)
            return <li> No alert</li>

        return (
            notifications.map(function (alert, index) {
                return <li key={index}>{alert}</li>
            })
        )
    }

    return (
        <div className={`${is_open ? 'show' : ''} popup-notification notification-${notification_type} ` + (props.classes ? props.classes : '')}>
            <i className="fa fa-exclamation-circle"></i>
            <button className="close" onClick={() => props.handleCloseNotifications()}>x</button>
            <ul>
                {renderAlerts()}
            </ul>
        </div>
    )
}

export default Notification;
