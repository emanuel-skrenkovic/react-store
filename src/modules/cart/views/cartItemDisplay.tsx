import React from 'react';
import { useDispatch } from 'react-redux';

import { CartItem } from 'models';
import { ShopItemDetail } from "modules/shop";
import { attemptRemoveItem } from 'modules/cart';

export interface CartItemDisplayProps {
    cartItem: CartItem
}

export const CartItemDisplay: React.FC<CartItemDisplayProps> = ({ cartItem }) => {
    const { item, count } = cartItem;

    const dispatch = useDispatch();

    // TODO: should be higher in the chain. This component should display only.
    const onClickRemoveFromCart = (itemId: string) => {
        dispatch(attemptRemoveItem(itemId));
    };

    return (
        <div className="item" key={item.id}>
            <div className="ui grid">
                <div className="row">
                    <div className="twelve wide column">
                        <ShopItemDetail key={item.id} item={item} />
                    </div>
                    <div className="one wide column">
                        <div className="ui fluid input">
                            <form className="ui form" action="">
                                <div className="ten wide field">
                                    <input type="text" disabled value={count} />
                                </div>
                            </form>
                        </div>
                        Total: ${item.price * count}
                        <button className="ui icon button" onClick={() => onClickRemoveFromCart(item.id)}>
                            <i className="trash alternate icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
