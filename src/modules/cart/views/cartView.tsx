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
                    return (
                        <ShopItemDetail key={i.id} item={i}>
                            <div className="item right floated">
                                <button className="ui button" onClick={() => onClickRemoveFromCart(i.id)}>Remove from cart</button>
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