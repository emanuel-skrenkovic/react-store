import { Shop, ShopItems, Filter, Pagination, SortOrder } from 'models';
import { GET_CATEGORIES, GET_ITEMS, ShopAction, UPDATE_SHOP_FILTER } from 'modules/shop';

const DEFAULT_FILTER: Filter = {
    sortOrder: SortOrder.PriceLowest,
    category: '',
    searchString: '',
};

const DEFAULT_PAGINATION: Pagination = {
    lastItemPrice: undefined,
    currentPage: 1,
    totalItemCount: 0,
    pageSize: 10
};

const DEFAULT_ITEMS: ShopItems = {
    items: [],
    pagination: DEFAULT_PAGINATION
};

const INITIAL_STATE: Shop = {
    items: DEFAULT_ITEMS,
    categories: {},
    filter: DEFAULT_FILTER,
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