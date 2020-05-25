import { ThunkDispatch } from "redux-thunk";

import { Filter, ApplicationState, ShopItem, ShopItems, Category, Categories, } from 'models';
import { convertArrayToMap } from 'modules/common';
import { fetchItemById, filterItems } from 'modules/common/providers/items';
import { fetchCategoryById, fetchCategories } from 'modules/common/providers/categories';
import {
    ShopAction,
    getCategory,
    getCategories,
    getItem,
    getItems,
    shopItemsSelector
} from 'modules/shop'

export const attemptGetItem = (itemId: string) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, ShopAction>) => {
        const item = await fetchItemById(itemId);

        dispatch(getItem(item));
    };

export const attemptGetItems = (filter: Filter, cursor: any = undefined) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, ShopAction>, getState: () => ApplicationState) => {
        const currentItems = shopItemsSelector(getState());

        const itemsArr: ShopItem[] = Object.values(currentItems.items);

        const { sortBy, direction } = filter;

        const cursor: any = (itemsArr && itemsArr.length > 0)
            ? itemsArr[itemsArr.length - 1][sortBy]
            : undefined;

        const items: ShopItems = await filterItems(filter, cursor, direction);

        dispatch(getItems(items));
    };

export const attemptGetCategory = (categoryId: string) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, ShopAction>) => {
        const category: Category = await fetchCategoryById(categoryId);

        dispatch(getCategory(category));
    };

export const attemptGetCategories = () => async (dispatch: ThunkDispatch<ApplicationState, void, ShopAction>) => {
    const categories: Category[] = await fetchCategories();
    const categoriesMap: Categories = convertArrayToMap(categories);

    dispatch(getCategories(categoriesMap));
};
