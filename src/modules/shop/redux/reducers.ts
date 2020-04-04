import { Shop, SortOrder } from 'models';
import { ShopAction, GET_ITEMS, GET_CATEGORIES, UPDATE_SHOP_FILTER } from 'modules/shop';

const INITIAL_STATE: Shop = {
    items: [],
    categories: {},
    filter: {
        sortOrder: SortOrder.PriceLowest,
        category: '',
        searchString: '',
        pageNumber: 1,
        pageSize: 10
    }
};

export const shopReducer = (state: Shop = INITIAL_STATE, action: ShopAction): Shop => {
    switch (action.type) {
        case GET_ITEMS:
            return { ...state, items: action.payload };

        case GET_CATEGORIES:
            return { ...state, categories: action.payload };

        case UPDATE_SHOP_FILTER:
            return { ...state, filter: action.payload };

        default:
            return state;
    }
};