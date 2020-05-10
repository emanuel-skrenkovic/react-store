import { ShopItem } from 'models';

export const ADD_ITEM = 'GET_CATEGORY';
export const REMOVE_ITEM = 'GET_CATEGORIES';
export const EXPAND_CART = 'EXPAND_CART';
export const COLLAPSE_CART = 'COLLAPSE_CART';

export interface AddItemAction {
    type: typeof ADD_ITEM;
    payload: ShopItem;
}

export interface RemoveItemAction {
    type: typeof REMOVE_ITEM;
    payload: string;
}

export interface ExpandCartAction {
    type: typeof EXPAND_CART;
}

export interface CollapseCartAction {
    type: typeof COLLAPSE_CART;
}

export type CartAction = AddItemAction | RemoveItemAction | ExpandCartAction | CollapseCartAction;

export const addItem = (item: ShopItem): AddItemAction => {
    return { type: ADD_ITEM, payload: item };
};

export const removeItem = (id: string): RemoveItemAction => {
    return { type: REMOVE_ITEM, payload: id };
};

export const expandCart = (): ExpandCartAction => {
    return { type: EXPAND_CART };
};

export const collapseCart = (): CollapseCartAction => {
    return { type: COLLAPSE_CART };
};
