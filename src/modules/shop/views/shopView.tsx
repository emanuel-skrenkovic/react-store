import React from 'react';
import { useSelector } from 'react-redux';
import qs from 'query-string';
import * as _ from 'lodash';

import { history, Category, Filter, PaginationDirection } from 'models';
import { Pager } from 'modules/common';
import {
    ShopFilter,
    ShopItemList,
    attemptGetItems,
    useShop,
    useFilter,
    shopFilterSelector
} from 'modules/shop';

export const ShopView: React.FC = () => {
    const filter: Filter = useSelector(shopFilterSelector);

    useFilter('/listing', filter, attemptGetItems);
    const [categories, items] = useShop(filter);

    const { totalItemCount } = items;

    const categoriesArr: Category[] = Object.values(categories);
    const { page, pageSize } = filter;

    const onFilterSubmit = (filter: Filter) => {
        const queryString = '/listing?' + qs.stringify(_.pickBy(filter));

        // Set the filter as the query string - the location listener
        // will update state with the correct filter
        history.push(queryString);
    };

    const onClickNextPage = () => {
        const nextPage = page + 1;

        if (nextPage * pageSize > totalItemCount) {
            return;
        }

        const queryObject: Filter = {
            ...filter,
            page: nextPage,
            direction: PaginationDirection.Forward
        } as Filter;

        const queryString: string = '/listing?' + qs.stringify(queryObject);

        history.push(queryString);
    };

    const onClickPreviousPage = () => {
        if (page === 1) {
            return;
        }

        const queryObject: Filter = {
            ...filter,
            page: page - 1,
            direction: PaginationDirection.Backward
        } as Filter;

        const queryString: string = '/listing?' + qs.stringify(queryObject);

        history.push(queryString);
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
                    currentPage={page}
                    pageSize={pageSize}
                    totalItemCount={totalItemCount}
                    onClickNext={onClickNextPage}
                    onClickPrevious={onClickPreviousPage}
                />
            </div>
        </div>
    );
};
