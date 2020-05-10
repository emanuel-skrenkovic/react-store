import React from 'react';

import { CartItem } from 'models';
import { CartItemDisplay } from 'modules/cart';

export interface CartItemListProps {
    items: CartItem[];
}

export const CartItemList: React.FC<CartItemListProps> = ({ items }) => {
    return (
        <div className="ui items">
            {items && items.map(i => {
                return <CartItemDisplay cartItem={i} />;
            })}
        </div>
    );
};