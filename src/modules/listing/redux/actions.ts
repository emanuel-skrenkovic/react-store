import { Category, ShopItem } from 'models';
import {
    AddCategoryAction,
    GetCategoriesAction,
    RemoveCategoryAction,
    GetItemsAction,
    AddItemAction,
    RemoveItemAction,
    GET_CATEGORIES,
    ADD_CATEGORY,
    REMOVE_CATEGORY,
    GET_ITEMS,
    ADD_ITEM,
    REMOVE_ITEM
} from 'modules/listing';

export const getCategories = (categories: Category[]): GetCategoriesAction => {
    return { type: GET_CATEGORIES, payload: categories };
};

export const addCategory = (category: Category): AddCategoryAction => {
    return { type: ADD_CATEGORY, payload: category };
};

export const removeCategory = (categoryId: string): RemoveCategoryAction => {
    return { type: REMOVE_CATEGORY, payload: categoryId };
};

export const getItems = (items: ShopItem[]): GetItemsAction => {
    return { type: GET_ITEMS, payload: items };
};

export const addItem = (item: ShopItem): AddItemAction => {
    return { type: ADD_ITEM, payload: item };
};

export const removeItem = (itemId: string): RemoveItemAction => {
    return { type: REMOVE_ITEM, payload: itemId };
};
