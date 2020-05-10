import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../stylesheets/align.css';

import { history, ApplicationState, CartItem } from 'models';
import { collapseCart, CartItemList } from 'modules/cart';

export const CartSidebar: React.FC = () => {
    const { items, totalCost } = useSelector((state: ApplicationState) => state.cart);
    const itemsArr: CartItem[] = Object.values(items);

    const dispatch = useDispatch();

    const onClickViewCart = () => {
        dispatch(collapseCart());
        history.push('/cart');
    };

    const buttonStyle = `ui teal labeled ${(itemsArr && itemsArr.length > 0) ? '' : 'disabled'} icon button`;

    return (
        <div className="ui container">
            <div className="ui right vertical menu visible sidebar">
                <div className="ui container">
                    <button className="ui right floated icon button" onClick={() => dispatch(collapseCart())}>
                        <i className="x icon" />
                    </button>
                </div>
                <div className="ui items">
                    <CartItemList items={itemsArr} />
                </div>
                <div className="ui container bottom-aligned">
                    <h3 className="">
                        ${totalCost}
                    </h3>
                    <button className={buttonStyle} onClick={onClickViewCart}>
                        <i className="cart icon"/>
                        View cart
                    </button>
                </div>
            </div>
        </div>
    );
};