import { Shop } from 'models';
import { ShopAction, GET_ITEMS, GET_CATEGORIES } from 'modules/shop';

const INITIAL_STATE: Shop = {
    items: {},
    categories: {}
};

export const shopReducer = (
    state: Shop = INITIAL_STATE, action: ShopAction): Shop => {
    switch (action.type) {
        case GET_ITEMS:
            return { ...state, items: action.payload };

        case GET_CATEGORIES:
            return { ...state, categories: action.payload };

        default:
            return state;
    }
};