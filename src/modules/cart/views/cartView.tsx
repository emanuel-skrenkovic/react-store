import React from 'react';
import { useSelector } from 'react-redux';

import { CartItem } from 'models';
import { selectCart, CartItemList } from 'modules/cart';

export const CartView: React.FC = () => {
    const { items, totalCost } = useSelector(selectCart);
    const itemsArr: CartItem[] = Object.values(items);

    const onClickCheckout = () => {
        console.log('checkout');
    };

    const buttonStyle = `ui teal labeled ${(itemsArr && itemsArr.length > 0) ? '' : 'disabled'} icon button`;

    return (
        <div className="ui container">
            <CartItemList items={Object.values(items)} />
            <div className="ui container bottom-aligned">
                <h3 className="">
                    ${totalCost}
                </h3>
                <button className={buttonStyle} onClick={onClickCheckout}>
                    <i className="cart icon"/>
                    Checkout
                </button>
            </div>
        </div>
    )
};