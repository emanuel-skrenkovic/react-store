import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'query-string';

import {history, ShopItems, Categories, Filter } from "models";
import {
    attemptGetCategories,
    updateShopFilter,
    updateQueryString,
    shopCategoriesSelector,
    shopItemsSelector
} from 'modules/shop';

export const useShop = (filter: Filter): Array<any> => {
    const items: ShopItems = useSelector(shopItemsSelector);
    const categories: Categories = useSelector(shopCategoriesSelector);

    return [categories, items];
};

export const useFilter = (path: string, initialFilter: Filter, action: any): void => {
    const dispatch = useDispatch();

    useEffect(() => {
        history.push(`${path}?${qs.stringify(initialFilter)}`);
        dispatch(attemptGetCategories());
    }, [dispatch]);

    const queryToState = useCallback((queryString: string) => {
        const filter: Filter = queryString
            ? qs.parse(queryString) as any as Filter // hack to go around the lack of strongly typed query string parsing
            : initialFilter;

        dispatch(updateQueryString(queryString));
        dispatch(updateShopFilter(filter));

        dispatch(action(filter));
    }, [dispatch]);

    history.listen((listener) => {
        if (listener.pathname !== path || !listener.search) {
            return;
        }

        queryToState(listener.search);
    });
};
