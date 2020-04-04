import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState, Dictionary, ShopItem, Categories, Filter } from "models";
import { attemptGetCategories, attemptGetItems } from 'modules/shop';

export const useShop = (filter: Filter | undefined): Dictionary<string, any>[] => {
    const { categories, items }: { categories: Categories, items: ShopItem[] } = useSelector(
        (state: ApplicationState) => {
            if (state.shop) {
                return { categories: state.shop.categories, items: state.shop.items };
            } else {
                return { categories: {}, items: [] };
            }
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(attemptGetItems(filter));
        dispatch(attemptGetCategories());
    }, [dispatch, filter]);

    return [categories, items];
};

export const useShopFilter = (): Array<Filter> => {
    const filter: Filter = useSelector((state: ApplicationState) => state.shop.filter);

    return [filter];
};