import { ShopItem } from 'models';
import { AddItemAction, RemoveItemAction, ADD_ITEM, REMOVE_ITEM } from 'modules/cart';

export const addItem = (item: ShopItem): AddItemAction => {
    return {type: ADD_ITEM, payload: item};
};

export const removeItem = (id: string): RemoveItemAction => {
    return { type: REMOVE_ITEM, payload: id };
};
