import { omit } from 'lodash';

import { Cart } from 'models';
import { CartAction, ADD_ITEM, REMOVE_ITEM } from 'modules/cart';

const INITIAL_STATE: Cart = {
    items: {},
    totalCost: 0
};

export const cartReducer = (state: Cart = INITIAL_STATE,  action: CartAction): Cart => {
    switch (action.type) {
        case ADD_ITEM:
        {
            const item = action.payload;
            const newItems = { ...state.items, [item.id]: item };

            // TODO: should this be moved out of state and calculated on
            // demand in a selector?
            const newCost: number = Object.values(newItems)
                .map(i => i.price)
                .reduce((acc, x) => acc + x, 0);

            return { ...state, totalCost: newCost, items: newItems };
        }

        case REMOVE_ITEM:
        {
            const newItems = omit(state.items, action.payload);

            // TODO: should this be moved out of state and calculated on
            // demand in a selector?
            const newCost: number = Object.values(newItems)
                .map(i => i.price)
                .reduce((acc, x) => acc + x, 0);

            return { ...state, totalCost: newCost, items: newItems };
        }

        default:
            return state;
    }
};