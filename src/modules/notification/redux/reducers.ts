import * as _ from 'lodash';

import { ADD_NOTIFICATION, NotificationAction, REMOVE_NOTIFICATION } from 'modules/notification';

export const notificationReducer = (state: any, action: NotificationAction) => {
    switch(action.type) {
        case ADD_NOTIFICATION:
            return { ...state, [action.payload.id]: action.payload };

        case REMOVE_NOTIFICATION:
            return _.omit(state, action.payload);

        default:
            return state;
    }
}