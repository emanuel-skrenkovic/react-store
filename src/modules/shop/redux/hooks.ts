import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState, Shop } from "models";
import { attemptGetCategories, attemptGetItems } from 'modules/shop';

export const useShop = () => {
    const shop: Shop | undefined = useSelector((state: ApplicationState) => { return state.shop });

    let categories = {};
    let items = {};
    if (shop) {
        categories = shop.categories;
        items = shop.items;
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(attemptGetItems());
        dispatch(attemptGetCategories());
    }, []);

    return [categories, items];
};