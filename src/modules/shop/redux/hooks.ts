import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ShopItem, Categories, Filter, Pagination } from "models";
import {
    attemptGetCategories,
    attemptGetItems,
    shopCategoriesSelector,
    shopFilterSelector,
    shopPaginationSelector,
    shopItemsSelector
} from 'modules/shop';

export const useShop = (filter: Filter | undefined, pagination: Pagination): Array<any> => {
    const items: ShopItem[] = useSelector(shopItemsSelector);
    const categories: Categories = useSelector(shopCategoriesSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(attemptGetItems(filter, pagination));
        dispatch(attemptGetCategories());
    }, [dispatch, filter, pagination]);

    return [categories, items];
};

export const useShopFilter = (): Array<any> => {
    const filter: Filter = useSelector(shopFilterSelector);
    const pagination: Pagination = useSelector(shopPaginationSelector);

    return [filter, pagination];
};