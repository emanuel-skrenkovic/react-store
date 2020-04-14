import { ThunkDispatch } from 'redux-thunk';

import { ApplicationState, ShopItem, Categories } from 'models';
import { getItems, updateItem as updateItemAction, getCategories, AdministrationAction } from 'modules/administration';
import { fetchItems, updateItem, fetchCategories } from 'modules/common';

export const attemptGetItems = () => async (dispatch: ThunkDispatch<ApplicationState, void, AdministrationAction>) => {
    const items = await fetchItems();

    dispatch(getItems(items));
};

export const attemptUpdateItem = (item: ShopItem) => async (dispatch: ThunkDispatch<ApplicationState, void, AdministrationAction>) => {
    await updateItem(item);

    dispatch(updateItemAction(item));
};

export const attemptGetCategories = () =>
    async (dispatch: ThunkDispatch<ApplicationState, void, AdministrationAction>) => {
        const categoriesArr = await fetchCategories();

        const categories: Categories = categoriesArr.reduce<Categories>((acc, x) => {
            return { ...acc, [x.id]: x };
        }, {});

        dispatch(getCategories(categories));
};