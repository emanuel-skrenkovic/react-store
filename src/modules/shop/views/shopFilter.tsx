import React, { ChangeEvent, useState } from 'react';

import { SortOrder } from 'models';
import { ShopFilterProps } from 'modules/shop';

export const ShopFilter: React.FC<ShopFilterProps> =
    ({ initialFilter, categories, onSubmit }: ShopFilterProps) => {

    const [searchString, setSearchString] = useState(initialFilter.searchString);
    const [sortOrder, setSortOrder] = useState(initialFilter.sortOrder);
    const [category, setCategory] = useState(initialFilter.category);
    const [pageNumber] = useState(initialFilter.pageNumber);
    const [pageSize] = useState(initialFilter.pageSize);

    const onSortOrderChanged = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();

        const selectedSortOrder: SortOrder = SortOrder[e.currentTarget.value as keyof typeof SortOrder];
        setSortOrder(selectedSortOrder);

        onSubmit({ ...initialFilter, sortOrder: selectedSortOrder });
    };

    const onCategoryChanged = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();

        const category = e.currentTarget.value;
        setCategory(category);

        onSubmit({ ...initialFilter, category: category });
    };

    return (
        <div className="ui text menu">
            <div className="item">
                <label className="ui label">Sort By Price:</label>
                <select
                    className="ui dropdown"
                    value={sortOrder}
                    onChange={onSortOrderChanged}>
                    <option value={SortOrder.PriceLowest}>Price: Lowest</option>
                    <option value={SortOrder.PriceHighest}>Price: Highest</option>
                </select>
            </div>
            <div className="item">
                <label className="ui label">Filter By Categories:</label>
                <select className="ui dropdown" value={category} onChange={onCategoryChanged}>
                    <option value={''}>Select Category</option>
                    {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                </select>
            </div>
        </div>
    );
};