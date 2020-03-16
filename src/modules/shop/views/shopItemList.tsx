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

    return items
        ? (<div className="ui celled list">
                  {items.map(i => <ShopItemDetail item={i} onButtonClick={onClickAddToCart} buttonText='Add to Cart' />)}
            </div>)
        : null;
};
