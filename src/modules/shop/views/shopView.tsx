import React from 'react';
import { useDispatch } from 'react-redux';

import { Category, Filter, PaginationDirection } from 'models';
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

    const { totalItemCount } = items;

    const categoriesArr: Category[] = Object.values(categories);
    const { currentPage, pageSize } = pagination;

    const dispatch = useDispatch();

    const onFilterSubmit = (filter: Filter) => {
        dispatch(updateShopPagination({ currentPage: 1, pageSize: pagination.pageSize }));
        dispatch(updateShopFilter(filter));
    };

    const onClickNextPage = () => {
        if ((currentPage + 1) * pageSize > totalItemCount) {
            return;
        }

        dispatch(updateShopPagination({
            ...pagination,
            currentPage: currentPage + 1,
            direction: PaginationDirection.Forward
        }));
    };

    const onClickPreviousPage = () => {
        if (currentPage === 1) {
            return;
        }

        dispatch(updateShopPagination({
            ...pagination,
            currentPage: currentPage - 1,
            direction: PaginationDirection.Backward
        }));
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
                    <ShopItemList items={Object.values(items.items)} />
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
