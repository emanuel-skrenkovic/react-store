import { ShopItem, Category, Categories } from 'models';

export const GET_ITEMS = 'ADMIN_GET_ITEMS';
export const CREATE_ITEM = 'ADMIN_CREATE_ITEM';
export const UPDATE_ITEM = 'ADMIN_UPDATE_ITEM';
export const DELETE_ITEM = 'ADMIN_DELETE_ITEM';
export const GET_CATEGORIES = 'ADMIN_GET_CATEGORIES';
export const CREATE_CATEGORY = 'ADMIN_CREATE_CATEGORY';
export const UPDATE_CATEGORY = 'ADMIN_UPDATE_CATEGORY';
export const DELETE_CATEGORY = 'ADMIN_DELETE_CATEGORY';

export interface GetItemsAction {
    type: typeof GET_ITEMS;
    payload: ShopItem[];
}

export interface CreateItemAction {
    type: typeof CREATE_ITEM;
    payload: ShopItem;
};

export interface UpdateItemAction {
    type: typeof UPDATE_ITEM;
    payload: ShopItem;
}

export interface DeleteItemAction {
    type: typeof DELETE_ITEM;
    payload: string;
}

export interface GetCategoriesAction {
    type: typeof GET_CATEGORIES;
    payload: Categories;
}

export interface CreateCategoryAction {
    type: typeof CREATE_CATEGORY;
    payload: Category;
}

export interface UpdateCategoryAction {
    type: typeof UPDATE_CATEGORY;
    payload: Category;
}

export interface DeleteCategoryAction {
    type: typeof DELETE_CATEGORY;
    payload: string;
}

export type AdministrationAction = GetItemsAction
    | CreateItemAction
    | UpdateItemAction
    | DeleteItemAction
    | GetCategoriesAction
    | CreateCategoryAction
    | UpdateCategoryAction
    | DeleteCategoryAction;

export const getItems = (items: ShopItem[]): GetItemsAction => {
    return { type: GET_ITEMS, payload: items };
};

export const createItem = (item: ShopItem): CreateItemAction => {
    return { type: CREATE_ITEM, payload: item };
};

export const updateItem = (item: ShopItem): UpdateItemAction => {
    return { type: UPDATE_ITEM, payload: item };
};

export const deleteItem = (id: string): DeleteItemAction => {
    return { type: DELETE_ITEM, payload: id };
};

export const getCategories = (categories: Categories): GetCategoriesAction => {
    return { type: GET_CATEGORIES, payload: categories };
};

export const createCategory = (category: Category): CreateCategoryAction => {
    return { type: CREATE_CATEGORY, payload: category };
};

export const deleteCategory = (id: string): DeleteCategoryAction => {
    return { type: DELETE_CATEGORY, payload: id };
};
