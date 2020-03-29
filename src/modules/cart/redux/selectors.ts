import { ApplicationState, CartItem } from 'models';

export const selectCartItemCount = (state: ApplicationState) => {
    const { items } = state.cart;
    const itemsArr: CartItem[] = Object.values(items);

    return itemsArr.map(i => i.count).reduce((acc, x) => acc + x, 0);
};
