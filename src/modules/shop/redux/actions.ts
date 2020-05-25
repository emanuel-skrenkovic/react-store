import { ShopItem, ShopItems, Category, Categories, Filter, Pagination } from 'models';

export const GET_CATEGORY = 'GET_CATEGORY';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_ITEM = 'GET_ITEM';
export const GET_ITEMS = 'GET_ITEMS';
export const UPDATE_SHOP_FILTER = 'UPDATE_SHOP_FILTER';
export const UPDATE_SHOP_PAGINATION = 'UPDATE_SHOP_PAGINATION';
export const UPDATE_QUERY_STRING = 'UPDATE_QUERY_STRING';

export interface GetCategoryAction {
    type: typeof GET_CATEGORY;
    payload: Category;
}

export interface GetCategoriesAction {
    type: typeof GET_CATEGORIES;
    payload: Categories;
}

export interface GetItemAction {
    type: typeof GET_ITEM;
    payload: ShopItem;
}

export interface GetItemsAction {
    type: typeof GET_ITEMS;
    payload: ShopItems;
}

export interface UpdateShopFilterAction {
    type: typeof UPDATE_SHOP_FILTER;
    payload: Filter;
}

export interface UpdateShopPaginationAction {
    type: typeof UPDATE_SHOP_PAGINATION;
    payload: Pagination;
}

export interface UpdateQueryStringAction {
    type: typeof UPDATE_QUERY_STRING;
    payload: string;
}

export type ShopAction =
    GetCategoryAction
    | GetCategoriesAction
    | GetItemAction
    | GetItemsAction
    | UpdateShopFilterAction
    | UpdateShopPaginationAction
    | UpdateQueryStringAction;

export const getCategory = (category: Category): GetCategoryAction => {
    return { type: GET_CATEGORY, payload: category };
};

export const getCategories = (categories: Categories): GetCategoriesAction => {
    return { type: GET_CATEGORIES, payload: categories };
};

export const getItem = (item: ShopItem): GetItemAction => {
    return { type: GET_ITEM, payload: item };
};

export const getItems = (items: ShopItems): GetItemsAction => {
    return { type: GET_ITEMS, payload: items };
};

export const updateShopFilter = (filter: Filter): UpdateShopFilterAction => {
    return { type: UPDATE_SHOP_FILTER, payload: filter };
};

export const updateShopPagination = (pagination: Pagination): UpdateShopPaginationAction => {
    return { type: UPDATE_SHOP_PAGINATION, payload: pagination };
}

export const updateQueryString = (queryString: string): UpdateQueryStringAction => {
    return { type: UPDATE_QUERY_STRING, payload: queryString };
}
