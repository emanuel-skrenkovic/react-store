import {Shop, ShopItem, SortOrder} from 'models';
import {GET_CATEGORIES, GET_ITEMS, ShopAction, UPDATE_SHOP_FILTER, UPDATE_SHOP_PAGINATION} from 'modules/shop';

const DEFAULT_FILTER = {
    sortOrder: SortOrder.PriceLowest,
    category: '',
    searchString: '',
};

const DEFAULT_PAGINATION = {
    lastItemId: '',
    currentPage: 1,
    pageNumber: 1,
    pageSize: 1
};

const INITIAL_STATE: Shop = {
    items: [],
    categories: {},
    filter: DEFAULT_FILTER,
    pagination: DEFAULT_PAGINATION
};

export const shopReducer = (state: Shop = INITIAL_STATE, action: ShopAction): Shop => {
    switch (action.type) {
        case GET_ITEMS:
            const items = action.payload;
            const lastItem: ShopItem | undefined = items[items.length - 1];

            // TODO: find better way. Currently update in place to avoid infinite loop on fetching items.
            state.pagination.lastItemId = lastItem ? lastItem.id : '';

            return { ...state, items: action.payload };

        case GET_CATEGORIES:
            return { ...state, categories: action.payload };

        case UPDATE_SHOP_FILTER:
            return { ...state, filter: action.payload };

        case UPDATE_SHOP_PAGINATION:
            return { ...state, pagination: action.payload };

        default:
            return state;
    }
};