import React, { ChangeEvent, useState } from 'react';

import { Filter, SortOrder } from 'models';
import { ShopFilterProps } from 'modules/shop';

export const ShopFilter: React.FC<ShopFilterProps> =
    ({ initialFilter, categories, onSubmit }: ShopFilterProps) => {

    const [searchString, setSearchString] = useState(initialFilter.searchString);
    const [sortOrder, setSortOrder] = useState(initialFilter.sortOrder);
    const [category, setCategory] = useState(initialFilter.category);
    const [pageNumber] = useState(initialFilter.pageNumber);
    const [pageSize] = useState(initialFilter.pageSize);

    const onClickSubmitButton = (event: React.SyntheticEvent ) => {
        event.preventDefault();

        // TODO: change to update only the changed values instead of recreate
        // the entire filter object.
        // This will be more relevant when the search bar is moved to the
        // application header and paging is moved to a separate component.
        const filter = {
            sortOrder: sortOrder,
            searchString: searchString,
            category: category,
            pageNumber: pageNumber,
            pageSize: pageSize
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
                value={searchString}
                onChange={e => setSearchString(e.target.value) } />
            <label className="ui label">Sort By:</label>
            <select
                className="ui dropdown"
                value={sortOrder}
                onChange={onSortOrderChanged}>
                <option value={SortOrder.PriceLowest}>Price: Lowest</option>
                <option value={SortOrder.PriceHighest}>Price: Highest</option>
            </select>
            <select className="ui dropdown" value={category} onChange={onCategoryChanged}>
                <option value={''}>Select Category</option>
                {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
            </select>
            <button className="ui primary button" type="submit" onClick={onClickSubmitButton}>Apply</button>
        </div>
    );
};