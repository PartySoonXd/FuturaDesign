import React from "react";

export const Notification = ({isActive, title, text}) => {
    return (
        <div className={`notification ${isActive && "active"}`}>
            <div className="notification-container">
                <h3 className="notification-title">{title}</h3>
                <p className="notification-text">{text}</p>
                <div className={`notification-lifetime ${isActive && "active"}`}></div>
            </div>
        </div>
    )
}