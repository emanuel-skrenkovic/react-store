import React, { ChangeEvent, useState } from 'react';

import { Filter, SortOrder } from 'models';
import { ShopFilterProps } from 'modules/shop';

export const ShopFilter: React.FC<ShopFilterProps> =
    ({ initialFilter, categories, onSubmit }: ShopFilterProps) => {
    const [searchString, setSearchString] = useState(initialFilter ? initialFilter.searchString : '');
    const [sortOrder, setSortOrder] = useState(initialFilter ? initialFilter.sortOrder : SortOrder.PriceLowest);
    const [category, setCategory] = useState(initialFilter ? initialFilter.category : '');

    const onClickSubmitButton = (event: React.SyntheticEvent ) => {
        event.preventDefault();

        const filter = {
            sortOrder: sortOrder,
            searchString: searchString,
            category: category
        } as Filter;

        onSubmit(filter);
    };

    const onSortOrderChanged = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();

        const selectedSortOrder: SortOrder = SortOrder[e.currentTarget.value as keyof typeof SortOrder];
        setSortOrder(selectedSortOrder);
    };

    const onCategoryChanged = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();

        setCategory(e.currentTarget.value);
    };

    return (
        <div className="ui bottom visible sidebar vertical menu"> {/* TODO: fix css */}
            <input
                className="ui input"
                placeholder="Search..."
                value={searchString} onChange={e => setSearchString(e.target.value) } />
            <label className="ui label">Sort By:</label>
            <select
                className="ui dropdown"
                value={sortOrder}
                onChange={onSortOrderChanged}>
                <option value={SortOrder.PriceLowest}>Price: Lowest</option>
                <option value={SortOrder.PriceHighest}>Price: Highest</option>
            </select>
            <select className="ui dropdown" onChange={onCategoryChanged}>
                <option value={undefined}>Select Category</option>
                {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
            </select>
            <button className="ui primary button" type="submit" onClick={onClickSubmitButton}>Apply</button>
        </div>
    );
};