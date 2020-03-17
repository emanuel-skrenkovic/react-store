import React from 'react';
import { useDispatch } from 'react-redux';

import { ShopItem } from 'models';
import { ShopItemListProps, ShopItemDetail } from 'modules/shop';
import { addItem } from 'modules/cart';

export const ShopItemList: React.FC<ShopItemListProps> = (props: ShopItemListProps) => {
    const { items } = props;
    const dispatch = useDispatch();

    const onClickAddToCart = (item: ShopItem) => {
        dispatch(addItem(item));
    };

    const renderItems = () => {
        if (!items) {
            return null;
        }

        return (
            <div className="ui celled list">
                {items.map(i => {
                    return (
                        <ShopItemDetail item={i}>
                            <button className="ui button" onClick={() => onClickAddToCart(i)}>Add to Cart</button>
                        </ShopItemDetail>
                    );
                })}
            </div>
        );
    };

    return <div>{renderItems()}</div>;
};
