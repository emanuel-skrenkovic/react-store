import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState, ShopItem } from 'models';
import { ShopItemDetail } from 'modules/shop';
import { removeItem } from 'modules/cart';

export const CartView: React.FC = () => {
    const { items, totalCost } = useSelector((state: ApplicationState) => state.cart);
    const itemsArr: ShopItem[] = Object.values(items);

    const dispatch = useDispatch();

    const onClickRemoveFromCart = (id: string) => {
        dispatch(removeItem(id));
    };

    const renderItems = () => {
        if (!itemsArr) {
            return null;
        }

        return (
            <div className="ui celled list">
                {itemsArr.map(i => {
                    return (
                        <ShopItemDetail item={i}>
                            <button className="ui button" onClick={() => onClickRemoveFromCart(i.id)}>Remove from cart</button>
                        </ShopItemDetail>
                    );
                })}
            </div>
        );
    };

    return (
        <div>
            {renderItems()}
            Total Price: {totalCost}
        </div>
    );
};