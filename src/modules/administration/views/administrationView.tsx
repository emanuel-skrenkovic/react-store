import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ShopItem, Categories } from 'models';
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

    const categoriesArr = Object.values(categories);

    const [selectedItem, setSelectedItem] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(attemptGetItems());
        dispatch(attemptGetCategories());
    }, [dispatch]);

    const onSubmitItemEdit = (item: ShopItem) => {
        dispatch(attemptUpdateItem(item));
    };

    return (
        <div className="ui container">
            <Sidebar />
            <div className="ui two column grid">
                <div className="column" style={{ height: "80vh", overflow: "scroll" }}>
                    <ItemSelect
                        items={items}
                        categories={categoriesArr}
                        onClickItem={(item) => setSelectedItem(item)} />
                </div>
                {selectedItem &&
                    <div className="column">
                        <ItemEditForm item={selectedItem} onSubmitForm={onSubmitItemEdit}/>
                    </div>}

            </div>
        </div>
    );
};