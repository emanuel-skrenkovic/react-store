import { ThunkDispatch } from "redux-thunk";

import { ApplicationState, ShopItem, ShopItems, Category, Categories } from 'models';
import { getDocument, getDocuments } from 'modules/common/providers';
import {
    ShopAction,
    getCategory,
    getCategories,
    getItem,
    getItems
} from 'modules/shop'

export const attemptGetItem = (itemId: string) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, ShopAction>) => {
        const item: ShopItem = await getDocument<ShopItem>('items', itemId);

        dispatch(getItem(item));
    };

export const attemptGetItems = () =>
    async (dispatch: ThunkDispatch<ApplicationState, void, ShopAction>) => {
        const items: ShopItem[] = await getDocuments<ShopItem[]>('items');

        const itemsDict: ShopItems = items.reduce<ShopItems>((acc, x) => {
            return { ...acc, [x.id]: x };
        }, {});

        dispatch(getItems(itemsDict));
    };

export const attemptGetCategory = (categoryId: string) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, ShopAction>) => {
        const category: Category = await getDocument<Category>('categories', categoryId);

        dispatch(getCategory(category));
    };

export const attemptGetCategories = () => async (dispatch: ThunkDispatch<ApplicationState, void, ShopAction>) => {
    const categories: Category[] = await getDocuments<Category[]>('categories');

    const categoriesDict: Categories = categories.reduce<Categories>((acc, x) => {
        return { ...acc, [x.id]: x };
    }, {});

    dispatch(getCategories(categoriesDict));
};
