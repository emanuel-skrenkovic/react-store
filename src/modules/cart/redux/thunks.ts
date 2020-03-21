import { ThunkDispatch } from 'redux-thunk';

import { ApplicationState, ShopItem } from 'models';
import { selectAuthInfo } from 'modules/authentication';
import { addItemToCart } from 'modules/common';
import { CartAction, addItem, removeItem } from 'modules/cart';

export const attemptAddItem = (item: ShopItem) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, CartAction>, getState: () => ApplicationState) => {
        console.log('reached attempAddItem');
        const { isSignedIn, user } = selectAuthInfo(getState());

        console.log(isSignedIn);
        console.log(user);

        if (isSignedIn && user) {
            await addItemToCart(user.userId, item);
        }

        dispatch(addItem(item));
};

export const attemptRemoveItem = (id: string) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, CartAction>) => {

        // const { isSignedIn } = useSelector(selectAuthInfo);
        //
        // if (isSignedIn) {
        //     // TODO update firebase
        // }

        dispatch(removeItem(id));
};
