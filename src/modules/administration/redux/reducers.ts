import * as _ from 'lodash';

import {Administration} from 'models';
import {
    AdministrationAction,
    CREATE_CATEGORY,
    CREATE_ITEM,
    DELETE_CATEGORY,
    DELETE_ITEM,
    GET_CATEGORIES,
    GET_ITEMS,
    UPDATE_CATEGORY,
    UPDATE_ITEM
} from 'modules/administration';

const INITIAL_STATE = {
    items: [],
    categories: {}
} as Administration;

export const administrationReducer = (state: Administration = INITIAL_STATE, action: AdministrationAction): Administration => {
    switch (action.type) {
        case GET_ITEMS:
            return { ...state, items: action.payload };

        case CREATE_ITEM:
            return { ...state, items: [...state.items, action.payload] };

        case UPDATE_ITEM:
            const newItem = action.payload;

            return { ...state, items: state.items.map(i => i.id === newItem.id ? newItem : i) };

        case DELETE_ITEM:
            return { ...state, items: state.items.filter(i => i.id === action.payload )};

        case GET_CATEGORIES:
            return { ...state, categories: action.payload };

        case CREATE_CATEGORY:
        case UPDATE_CATEGORY:
            return { ...state, categories: {...state.categories, [action.payload.id]: action.payload} };

        case DELETE_CATEGORY:
            return { ...state, categories: _.omit(state.categories, action.payload) };

        default:
            return state;
    }
};