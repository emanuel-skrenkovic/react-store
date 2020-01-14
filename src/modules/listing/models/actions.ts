import { ShopItem, Category } from 'models';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const GET_ITEMS = 'GET_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export interface GetCategoriesAction {
    type: typeof GET_CATEGORIES;
    payload: Category[];
}

export interface AddCategoryAction {
    type: typeof ADD_CATEGORY;
    payload: Category;
}

export interface RemoveCategoryAction {
    type: typeof REMOVE_CATEGORY;
    payload: string;
}

export interface GetItemsAction {
    type: typeof GET_ITEMS;
    payload: ShopItem[];
}

export interface AddItemAction {
    type: typeof ADD_ITEM;
    payload: ShopItem;
}

export interface RemoveItemAction {
    type: typeof REMOVE_ITEM;
    payload: string;
}

export type ListingAction =
    GetCategoriesAction
    | AddCategoryAction
    | RemoveCategoryAction
    | GetItemsAction
    | AddItemAction
    | RemoveItemAction;