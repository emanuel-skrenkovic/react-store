import { ThunkDispatch } from "redux-thunk";

import { Filter, Pagination, ApplicationState, ShopItems, Category, Categories, } from 'models';
import { fetchItemById, filterItems } from 'modules/common/providers/items';
import { fetchCategoryById, fetchCategories } from 'modules/common/providers/categories';
import {
    ShopAction,
    getCategory,
    getCategories,
    getItem,
    getItems,
    shopPaginationSelector
} from 'modules/shop'

export const attemptGetItem = (itemId: string) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, ShopAction>) => {
        const item = await fetchItemById(itemId);

        dispatch(getItem(item));
    };

export const attemptGetNextItemPage = () =>
    async (dispatch: ThunkDispatch<ApplicationState, any, ShopAction>, getState: () => ApplicationState) => {
        const { filter } = getState().shop;
        const pagination = shopPaginationSelector(getState());
        const { currentPage, pageSize, totalItemCount } = pagination;

        if ((currentPage + 1) * pageSize > totalItemCount) {
            return;
        }

        dispatch(attemptGetItems(filter, pagination, 'forward'));
    };

export const attemptGetPreviousItemPage = () =>
    async (dispatch: ThunkDispatch<ApplicationState, any, ShopAction>, getState: () => ApplicationState) => {
        const { filter } = getState().shop;
        const pagination = shopPaginationSelector(getState());
        const { currentPage } = pagination;

        if (currentPage === 1) {
            return;
        }

        dispatch(attemptGetItems(filter, pagination, 'backwards'));
    };

export const attemptGetItems = (filter: Filter, pagination: Pagination, direction: string = 'forward') =>
    async (dispatch: ThunkDispatch<ApplicationState, void, ShopAction>) => {
        const items: ShopItems = await filterItems(filter, pagination, direction);;

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
