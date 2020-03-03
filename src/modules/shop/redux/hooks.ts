import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState, Dictionary, ShopItems, Categories } from "models";
import { Filter, attemptGetCategories, attemptGetItems } from 'modules/shop';

export const useShop = (): Dictionary<string, any>[] => {
    const { categories, items }: { categories: Categories, items: ShopItems } = useSelector(
        (state: ApplicationState) => {
            if (state.shop) {
                return { categories: state.shop.categories, items: state.shop.items };
            } else {
                return { categories: {}, items: {} };
            }
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(attemptGetItems());
        dispatch(attemptGetCategories());
    }, []);

    return [categories, items];
};

export const useShopFilter = (): Array<Filter | undefined> => {
    const filter: Filter | undefined = useSelector((state: ApplicationState) => {
        return state.shop ? state.shop.filter : undefined
    });

    return [filter];
};