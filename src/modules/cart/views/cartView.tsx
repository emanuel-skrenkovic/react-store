import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState, CartItem } from 'models';
import { ShopItemDetail } from 'modules/shop';
import { attemptRemoveItem } from 'modules/cart';

export const CartView: React.FC = () => {
    const { items, totalCost } = useSelector((state: ApplicationState) => state.cart);
    const itemsArr: CartItem[] = Object.values(items);

    const dispatch = useDispatch();

    const onClickRemoveFromCart = (id: string) => {
        dispatch(attemptRemoveItem(id));
    };

    const onClickCheckOut = () => {
        console.log('checkout');
    };

    const renderItems = () => {
        if (!itemsArr) {
            return null;
        }

        return (
            <div className="ui celled list">
                {itemsArr.map(i => {
                    const { item, count } = i;
                    return (
                        <ShopItemDetail key={item.id} item={item}>
                            <div className="item right floated">
                                No.: {count}.
                            </div>
                            <div className="item right floated">
                                Cost of items: {item.price * count}.
                            </div>
                            <div className="item right floated">
                                <button className="ui button" onClick={() => onClickRemoveFromCart(item.id)}>Remove from cart</button>
                            </div>
                        </ShopItemDetail>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="ui container">
            {renderItems()}
            <div className="ui left action input">
                <button className="ui teal labeled icon button" onClick={() => onClickCheckOut()}>
                    <i className="cart icon"/>
                    Checkout
                </button>
                <input type="text" readOnly value={totalCost} />
            </div>
        </div>
    );
};