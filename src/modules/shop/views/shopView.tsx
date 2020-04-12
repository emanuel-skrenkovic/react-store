import React from 'react';
import { useDispatch } from 'react-redux';

import { Category, Filter } from 'models';
import { Pager } from 'modules/common';
import {
    ShopFilter,
    ShopItemList,
    useShop,
    useShopFilter,
    updateShopFilter,
    attemptGetNextItemPage,
    attemptGetPreviousItemPage
} from 'modules/shop';

export const ShopView: React.FC = () => {
    const [filter, pagination] = useShopFilter();
    const [categories, items] = useShop(filter, pagination);

    const categoriesArr: Category[] = Object.values(categories);
    const { currentPage, pageSize, totalItemCount } = pagination;

    const dispatch = useDispatch();

    const onFilterSubmit = (filter: Filter) => {
        dispatch(updateShopFilter(filter));
    };

    const onClickNextPage = () => {
        dispatch(attemptGetNextItemPage());
    };

    const onClickPreviousPage = () => {
        dispatch(attemptGetPreviousItemPage());
    };

    return (
        <div className="ui container">
            <div className="ui two row grid center aligned">
                <div className="row">
                    <ShopFilter
                        categories={categoriesArr}
                        initialFilter={filter}
                        onSubmit={onFilterSubmit} />
                </div>
                <div className="row">
                    <ShopItemList items={items} />
                </div>
                <Pager
                    currentPage={currentPage}
                    pageSize={pageSize}
                    totalItemCount={totalItemCount}
                    onClickNext={onClickNextPage}
                    onClickPrevious={onClickPreviousPage}
                />
            </div>
        </div>
    );
};