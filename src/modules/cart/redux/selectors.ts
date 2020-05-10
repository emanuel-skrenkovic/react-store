import { ApplicationState, CartItem } from 'models';

export const selectCart = (state: ApplicationState) => state.cart;
export const selectCartItems = (state: ApplicationState) => state.cart.items;

export const selectCartItemCount = (state: ApplicationState) => {
    const { items } = state.cart;
    const itemsArr: CartItem[] = Object.values(items);

    return itemsArr.map(i => i.count).reduce((acc, x) => acc + x, 0);
};

export const selectCartVisible = (state: ApplicationState) => state.cart.visible;
