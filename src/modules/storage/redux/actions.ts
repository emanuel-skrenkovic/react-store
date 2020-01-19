import { ApplicationUser, Category, ShopItem } from 'models';
import {
    GetCategoryAction,
    GetCategoriesAction,
    AddCategoryAction,
    DeleteCategoryAction,
    GetItemAction,
    GetItemsAction,
    AddItemAction,
    DeleteItemAction,
    GetUserAction,
    AddUserAction,
    UpdateUserAction,
    GET_CATEGORY,
    GET_CATEGORIES,
    ADD_CATEGORY,
    DELETE_CATEGORY,
    GET_ITEM,
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM,
    GET_USER,
    ADD_USER,
    UPDATE_USER
} from 'modules/storage';

export const getCategory = (category: Category): GetCategoryAction => {
    return { type: GET_CATEGORY, payload: category };
};

export const getCategories = (categories: Category[]): GetCategoriesAction => {
    return { type: GET_CATEGORIES, payload: categories };
};

export const addCategory = (category: Category): AddCategoryAction => {
    return { type: ADD_CATEGORY, payload: category };
};

export const deleteCategory = (categoryId: string): DeleteCategoryAction => {
    return { type: DELETE_CATEGORY, payload: categoryId };
};

export const getItem = (item: ShopItem): GetItemAction => {
    return { type: GET_ITEM, payload: item };
};

export const getItems = (items: ShopItem[]): GetItemsAction => {
    return { type: GET_ITEMS, payload: items };
};

export const addItem = (item: ShopItem): AddItemAction => {
    return { type: ADD_ITEM, payload: item };
};

export const deleteItem = (itemId: string): DeleteItemAction => {
    return { type: DELETE_ITEM, payload: itemId };
};

export const getUser = (user: ApplicationUser): GetUserAction => {
    return { type: GET_USER, payload: user };
};

export const addUser = (user: ApplicationUser): AddUserAction => {
    return { type: ADD_USER, payload: user };
};

export const updateUser = (user: ApplicationUser): UpdateUserAction => {
    return { type: UPDATE_USER, payload: user };
};
