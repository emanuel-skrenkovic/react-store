import { ShopItem, Category, ApplicationUser } from 'models';

export const GET_CATEGORY = 'GET_CATEGORY';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const GET_ITEM = 'GET_ITEM';
export const GET_ITEMS = 'GET_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const GET_USER = 'GET_USER';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';

export interface GetCategoryAction {
    type: typeof GET_CATEGORY;
    payload: Category;
}

export interface GetCategoriesAction {
    type: typeof GET_CATEGORIES;
    payload: Category[];
}

export interface AddCategoryAction {
    type: typeof ADD_CATEGORY;
    payload: Category;
}

export interface DeleteCategoryAction {
    type: typeof DELETE_CATEGORY;
    payload: string;
}

export interface GetItemAction {
    type: typeof GET_ITEM;
    payload: ShopItem;
}

export interface GetItemsAction {
    type: typeof GET_ITEMS;
    payload: ShopItem[];
}

export interface AddItemAction {
    type: typeof ADD_ITEM;
    payload: ShopItem;
}

export interface DeleteItemAction {
    type: typeof DELETE_ITEM;
    payload: string;
}

export interface GetUserAction {
    type: typeof GET_USER;
    payload: ApplicationUser;
}

export interface AddUserAction {
    type: typeof ADD_USER;
    payload: ApplicationUser;
}

export interface UpdateUserAction {
    type: typeof UPDATE_USER;
    payload: ApplicationUser;
}

export type StorageAction =
    GetCategoryAction
    | GetCategoriesAction
    | AddCategoryAction
    | DeleteCategoryAction
    | GetItemAction
    | GetItemsAction
    | AddItemAction
    | DeleteItemAction
    | GetUserAction
    | AddUserAction
    | UpdateUserAction;

