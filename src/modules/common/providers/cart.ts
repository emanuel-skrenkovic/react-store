import 'firebase/firestore';

import { ShopItem } from 'models';
import { store }  from "modules/common";

export const addItemToCart = async (userId: string, item: ShopItem): Promise<void> => {
    await store.collection('carts')
        .doc(userId)
        .collection('items')
        .doc(item.id)
        .set(item);
};

export const removeItemFromCart = async (userId: string, itemId: string): Promise<void> => {
    // const itemDocumentData: firebase.firestore.DocumentData = await store.collection('carts')
    //     .doc(userId)
    //     .collection('items')
    //     .doc(itemId)
    //     .get();
    //
    // const item: ShopItem = itemDocumentData.data() as ShopItem;
    //
    // const cartDocumentData: firebase.firestore.DocumentData = await store.collection('carts')
    //     .doc(userId)
    //     .collection('items')
    //     .where('id', '==', itemId)
};
