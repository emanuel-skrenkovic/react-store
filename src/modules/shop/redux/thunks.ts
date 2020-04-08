import { ThunkDispatch } from "redux-thunk";

import { Filter, Pagination, ApplicationState, ShopItem, Category, Categories, } from 'models';
import { fetchItemById, filterItems, fetchItems } from 'modules/common/providers/items';
import { fetchCategoryById, fetchCategories } from 'modules/common/providers/categories';
import {
    ShopAction,
    getCategory,
    getCategories,
    getItem,
    getItems
} from 'modules/shop'

export const attemptGetItem = (itemId: string) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, ShopAction>) => {
        const item = await fetchItemById(itemId);

        dispatch(getItem(item));
    };

export const attemptGetItems = (filter: Filter | undefined, pagination: Pagination) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, ShopAction>) => {
        let items: ShopItem[];

        if (filter) {
            items = await filterItems(filter, pagination);
        } else {
            items = await fetchItems();
        }

        dispatch(getItems(items));
    };

export const attemptGetCategory = (categoryId: string) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, ShopAction>) => {
        const category: Category = await fetchCategoryById(categoryId);

        dispatch(getCategory(category));
    };

export const attemptGetCategories = () => async (dispatch: ThunkDispatch<ApplicationState, void, ShopAction>) => {
    const categories: Category[] = await fetchCategories();

    const categoriesDict: Categories = categories.reduce<Categories>((acc, x) => {
        return { ...acc, [x.id]: x };
    }, {});

    dispatch(getCategories(categoriesDict));
};
