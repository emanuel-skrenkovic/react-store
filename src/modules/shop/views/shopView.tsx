import React from 'react';
import { useDispatch } from 'react-redux';

import { Category, Filter, Pagination } from 'models';
import { Pager } from 'modules/common';
import {
    ShopFilter,
    ShopItemList,
    useShop,
    useShopFilter,
    updateShopFilter,
    updateShopPagination
} from 'modules/shop';

export const ShopView: React.FC = () => {
    const [filter, pagination] = useShopFilter();
    const [categories, items] = useShop(filter, pagination);

    const categoriesArr: Category[] = Object.values(categories);
    const { currentPage, pageSize } = pagination;

    const dispatch = useDispatch();

    const onFilterSubmit = (filter: Filter) => {
        dispatch(updateShopFilter(filter));
    };

    const onClickNextPage = () => {
        const newPagination: Pagination = { ...pagination, currentPage: currentPage + 1 };

        dispatch(updateShopPagination(newPagination));
    };

    const onClickPreviousPage = () => {
        const newPagination = { ...pagination, currentPage: currentPage - 1 };

        dispatch(updateShopPagination(newPagination));
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
                    onClickNext={onClickNextPage}
                    onClickPrevious={onClickPreviousPage}
                />
            </div>
        </div>
    );
};