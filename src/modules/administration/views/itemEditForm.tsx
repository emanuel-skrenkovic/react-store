import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import { Category, ShopItem } from 'models';
import { adminCategoriesListSelector } from "modules/administration";

interface ItemEditFormProps {
    item: ShopItem;
    onSubmitForm: (item: ShopItem) => void;
}

export const ItemEditForm: React.FC<ItemEditFormProps> = ({ item, onSubmitForm }: ItemEditFormProps) => {
    const [name, setName] = useState(item.name);
    const [price, setPrice] = useState(item.price);
    const [category, setCategory] = useState(item.category);

    const categories: Category[] = useSelector(adminCategoriesListSelector);

    useEffect(() => {
        setName(item.name);
        setPrice(item.price);
    }, [item])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSubmitForm({ ...item, name: name, price: price, category: category });
    };

    const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.currentTarget.value);
    };

    return (
        <div className="ui container">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label htmlFor="name-input">Name</label>
                    <input
                        id="name-input"
                        type="text"
                        value={name}
                        onChange={(e: React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)} />
                </div>
                <div className="field">
                    <label htmlFor="price-input">Price</label>
                    <input
                        id="price-input"
                        type="number"
                        value={price}
                        onChange={(e: React.FormEvent<HTMLInputElement>) => setPrice(Number(e.currentTarget.value))} />
                </div>
                <div className="field">
                    <label htmlFor="category-input">Category</label>
                    <select className="ui dropdown" value={category} onChange={onChangeCategory}>
                        {categories && categories.map(c => {
                            return (
                                <option key={c.id} value={c.name}>{c.name}</option>
                            );
                        })}
                    </select>
                </div>
                <button className="ui button blue" type="submit">Save</button>
            </form>
        </div>
    );
};