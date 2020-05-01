import { Notification } from 'models';

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export interface AddNotificationAction {
    type: typeof ADD_NOTIFICATION;
    payload: Notification
}

export interface RemoveNotificationAction {
    type: typeof REMOVE_NOTIFICATION;
    payload: string;
}

export type NotificationAction = AddNotificationAction | RemoveNotificationAction;

export const addNotification = (notification: Notification): AddNotificationAction => {
    return { type: ADD_NOTIFICATION, payload: notification };
};

export const removeNotification = (id: string): RemoveNotificationAction => {
    return { type: REMOVE_NOTIFICATION, payload: id };
};