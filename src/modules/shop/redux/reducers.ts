import { Shop, Filter, Pagination, ShopItems, PaginationDirection, ItemSortCriterion, SortOrder } from 'models';
import { GET_CATEGORIES, GET_ITEMS, UPDATE_SHOP_FILTER, UPDATE_SHOP_PAGINATION, ShopAction } from 'modules/shop';

const DEFAULT_FILTER: Filter = {
    sortOrder: SortOrder.Ascending,
    sortBy: ItemSortCriterion.Price,
    category: '',
    searchString: ''
};

const DEFAULT_PAGINATION: Pagination = {
    currentPage: 1,
    // pageSize: 10
    pageSize: 1,
    direction: PaginationDirection.Forward
};

const DEFAULT_ITEMS = {
    items: {},
    totalItemCount: 0
} as ShopItems;

const INITIAL_STATE: Shop = {
    shopItems: DEFAULT_ITEMS,
    categories: {},
    filter: DEFAULT_FILTER,
    pagination: DEFAULT_PAGINATION
};

export const shopReducer = (state: Shop = INITIAL_STATE, action: ShopAction): Shop => {
    switch (action.type) {
        case GET_ITEMS:
            return { ...state, shopItems: action.payload };

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