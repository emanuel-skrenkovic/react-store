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

export const useShop = (filter: Filter, pagination: Pagination): Array<any> => {
    const items: ShopItem[] = useSelector(shopItemsSelector);
    const categories: Categories = useSelector(shopCategoriesSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        // Remove cursor from pagination on changing filter as changing filter
        // resets the page to the first one.
        const newPagination = { ...pagination, currentPage: 1, lastItemPrice: undefined }

        dispatch(attemptGetItems(filter, newPagination));
        dispatch(attemptGetCategories());
    }, [dispatch, filter]);

    return [categories, items];
};

export const useShopFilter = (): Array<any> => {
    const filter: Filter = useSelector(shopFilterSelector);
    const pagination: Pagination = useSelector(shopPaginationSelector);

    return [filter, pagination];
};