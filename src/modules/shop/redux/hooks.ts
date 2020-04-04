import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Dictionary, ShopItem, Categories, Filter } from "models";
import {
    attemptGetCategories,
    attemptGetItems,
    shopCategoriesSelector,
    shopFilterSelector,
    shopItemsSelector
} from 'modules/shop';

export const useShop = (filter: Filter | undefined): Dictionary<string, any>[] => {
    const items: ShopItem[] = useSelector(shopItemsSelector);
    const categories: Categories = useSelector(shopCategoriesSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(attemptGetItems(filter));
        dispatch(attemptGetCategories());
    }, [dispatch, filter]);

    return [categories, items];
};

export const useShopFilter = (): Array<Filter> => {
    const filter: Filter = useSelector(shopFilterSelector);

    return [filter];
};