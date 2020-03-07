import React, {FormEvent, useState} from 'react';

import {Filter, ShopFilterProps, SortOrder} from 'modules/shop';

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

    const onSortOrderChanged = (e: FormEvent<HTMLSelectElement>) => {
        e.preventDefault();

        const selectedSortOrder: SortOrder = SortOrder[e.currentTarget.value as keyof typeof SortOrder];
        setSortOrder(selectedSortOrder);
    };

    const onCategoryChanged = (e: FormEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setCategory(e.currentTarget.value);
    };

    return (
        <div>
            <input value={searchString} onChange={e => setSearchString(e.target.value) }/>
            <label>Sort By:</label>
            <select
                className="ui dropdown"
                value={sortOrder}
                onChange={onSortOrderChanged}>
                <option value={SortOrder.PriceLowest}>Price: Lowest</option>
                <option value={SortOrder.PriceHighest}>Price: Highest</option>
            </select>
            <button type="submit" onClick={onClickSubmitButton}>Apply</button>
            <select onChange={onCategoryChanged}>
                <option value={undefined}>Select Category</option>
                {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
            </select>
        </div>
    );
};