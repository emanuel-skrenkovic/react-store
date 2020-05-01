import React, { ChangeEvent, useState } from 'react';

import { Category, Filter, SortOrder } from 'models';

export interface ShopFilterProps {
    onSubmit: (filter: Filter) => void;
    categories: Category[];
    initialFilter: Filter;
}

export const ShopFilter: React.FC<ShopFilterProps> =
    ({ initialFilter, categories, onSubmit }: ShopFilterProps) => {

    const [sortOrder, setSortOrder] = useState(initialFilter.sortOrder);
    const [category, setCategory] = useState(initialFilter.category);

    const onSortOrderChanged = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();

        const selectedSortOrder = Number(e.currentTarget.value) as SortOrder;
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
                <label className="ui large label">Sort By Price:</label>
                <select
                    className="ui selection dropdown"
                    value={sortOrder}
                    onChange={onSortOrderChanged}>
                    <option value={SortOrder.Ascending}>Price: Lowest</option>
                    <option value={SortOrder.Descending}>Price: Highest</option>
                </select>
            </div>
            <div className="item">
                <label className="ui large label">Filter By Categories:</label>
                <select className="ui selection dropdown" value={category} onChange={onCategoryChanged}>
                    <option value={''}>Select Category</option>
                    {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                </select>
            </div>
        </div>
    );
};