import { omit, has } from 'lodash';

import { Cart, CartItem, CartItems, ShopItem } from 'models';
import { CartAction, ADD_ITEM, REMOVE_ITEM } from 'modules/cart';

const INITIAL_STATE: Cart = {
    items: {},
    totalCost: 0
};

export const cartReducer = (state: Cart = INITIAL_STATE,  action: CartAction): Cart => {
    switch (action.type) {
        case ADD_ITEM:
        {
            const newItem: ShopItem = action.payload;
            const oldItems: CartItems = state.items;

            let newCartItem: CartItem;

            if (has(state.items, newItem.id)) {
                const oldItem = oldItems[newItem.id];
                newCartItem = { ...oldItem, count: ++oldItem.count };
            } else {
                newCartItem = { item: newItem, count: 1 };
            }

            const newItems: CartItems = { ...oldItems, [newItem.id]: newCartItem };

            return { ...state, totalCost: getTotalCost(newItems), items: newItems };
        }

        case REMOVE_ITEM:
        {
            const id = action.payload;

            const oldItems = state.items;
            let newItems: CartItems;

            // if the item is already there, subtract '1' from the count
            // if the count is 1, remove the item
            if (has(state.items, id)) {
                const oldItem = oldItems[id];

                if (oldItem.count > 1) {
                    const newItem: CartItem = { ...oldItem, count: --oldItem.count };
                    newItems = { ...oldItems, [id]: newItem };
                } else {
                    newItems = omit(state.items, id);
                }
            } else {
                newItems = omit(state.items, id);
            }

            return { ...state, totalCost: getTotalCost(newItems), items: newItems };
        }

        default:
            return state;
    }
};

const getTotalCost = (items: CartItems): number => {
    // multiply the cost of the items with the count
    // sum everything in the end
    return Object.values(items)
        .map(i => i.item.price * i.count)
        .reduce((acc, x) => acc + x, 0);
};