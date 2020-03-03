import { ShopItem, ShopItems, Category, Categories } from 'models';
import { Filter } from 'modules/shop';
import {
    GetCategoryAction,
    GetCategoriesAction,
    GetItemAction,
    GetItemsAction,
    UpdateShopFilterAction,
    GET_CATEGORY,
    GET_CATEGORIES,
    GET_ITEM,
    GET_ITEMS,
    UPDATE_SHOP_FILTER
} from 'modules/shop';

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

export const updateShopFilter = (filter: Filter) => {
    return { type: UPDATE_SHOP_FILTER, payload: filter };
};
