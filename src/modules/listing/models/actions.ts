import { ShopItem, Category } from 'models';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const GET_ITEMS = 'GET_ITEMS';

export interface GetCategoriesAction {
    type: typeof GET_CATEGORIES;
    payload: Category[];
}

export interface AddCategoryAction {
    type: typeof ADD_CATEGORY;
    payload: Category;
}

export interface GetItemsAction {
    type: typeof GET_ITEMS;
    payload: ShopItem[];
}

export type ListingAction = GetCategoriesAction | AddCategoryAction | GetItemsAction;