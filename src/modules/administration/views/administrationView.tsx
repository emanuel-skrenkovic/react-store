import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ShopItem, Categories, Category } from 'models';
import {
    Sidebar,
    adminItemsSelector,
    adminCategoriesSelector,
    attemptGetItems,
    attemptUpdateItem,
    attemptGetCategories,
    ItemEditForm,
    ItemSelect
} from 'modules/administration';

export const AdministrationView: React.FC = () => {
    const items: ShopItem[] = useSelector(adminItemsSelector);
    const categories: Categories = useSelector(adminCategoriesSelector);

    const [selectedItem, setSelectedItem] = useState();
    const [searchTerm, setSearchTerm] = useState('');

    const displayItems: ShopItem[] = items.filter(i => i.name.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0);
    const categoriesArr: Category[] = Object.values(categories);
    const displayCategories = categoriesArr.filter(
        c => displayItems.map(
            i => i.category.toUpperCase()).includes(c.name.toUpperCase()) || c.name.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(attemptGetItems());
        dispatch(attemptGetCategories());
    }, [dispatch]);

    const onSubmitItemEdit = (item: ShopItem) => {
        dispatch(attemptUpdateItem(item));
    };

    const onChangeSearchTerm = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchTerm(e.currentTarget.value);
    };

    return (
        <div className="ui container">
            <Sidebar />
            <div className="ui two column grid">
                <div className="column" style={{ height: "80vh", overflow: "scroll" }}>
                    <div className="ui icon input">
                        <form className="ui form">
                            <input
                                type="text"
                                placeholder="Search by category or item name..."
                                value={searchTerm}
                                onChange={onChangeSearchTerm} />
                        </form>
                        <i className="circular search link icon" />
                    </div>
                    <ItemSelect
                        items={displayItems}
                        categories={displayCategories}
                        onClickItem={(item) => setSelectedItem(item)} />
                </div>
                {selectedItem &&
                    <div className="column">
                        <ItemEditForm
                            item={selectedItem}
                            onSubmitForm={onSubmitItemEdit} />
                    </div>}

            </div>
        </div>
    );
};