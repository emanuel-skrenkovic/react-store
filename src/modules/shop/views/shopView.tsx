import React from 'react';
import { useDispatch } from 'react-redux';

import { ShopItem, Category } from 'models';
import {
    ShopFilter,
    ShopItemList,
    useShop,
    useShopFilter,
    updateShopFilter,
    Filter
} from 'modules/shop';

export const ShopView: React.FC = () => {
    const [categories, items] = useShop();
    const [filter] = useShopFilter();

    const categoriesArr: Category[] = Object.values(categories);
    const itemsArr: ShopItem[] = Object.values(items);

    const dispatch = useDispatch();

    const onFilterSubmit = (filter: Filter) => {
        dispatch(updateShopFilter(filter));
    };

    return (
        <div className="ui container">
            <ShopFilter
                categories={categoriesArr}
                initialFilter={filter}
                onSubmit={onFilterSubmit} />
            <ShopItemList items={itemsArr} />
        </div>
    );
};