import { ShopItem } from 'models';

export const ADD_ITEM = 'GET_CATEGORY';
export const REMOVE_ITEM = 'GET_CATEGORIES';

export interface AddItemAction {
    type: typeof ADD_ITEM;
    payload: ShopItem;
}

export interface RemoveItemAction {
    type: typeof REMOVE_ITEM;
    payload: string;
}

export type CartAction = AddItemAction | RemoveItemAction;
