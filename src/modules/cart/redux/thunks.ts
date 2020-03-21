import { ThunkDispatch } from 'redux-thunk';

import { ApplicationState, ShopItem } from 'models';
import { selectAuthInfo } from 'modules/authentication';
import { addItemToCart, removeItemFromCart } from 'modules/common';
import { CartAction, addItem, removeItem } from 'modules/cart';

export const attemptAddItem = (item: ShopItem) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, CartAction>, getState: () => ApplicationState) => {
        const { isSignedIn, user } = selectAuthInfo(getState());

        if (isSignedIn && user) {
            await addItemToCart(user.userId, item);
        }

        dispatch(addItem(item));
};

export const attemptRemoveItem = (id: string) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, CartAction>, getState: () => ApplicationState) => {

        const { isSignedIn, user } = selectAuthInfo(getState());

        if (isSignedIn && user) {
            await removeItemFromCart(user.userId, id);
        }

        dispatch(removeItem(id));
};
