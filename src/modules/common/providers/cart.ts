import * as firebase from 'firebase';
import 'firebase/firestore';

import { CartItem, ShopItem } from 'models';
import { store }  from "modules/common";

const CARTS = 'carts';
const ITEMS = 'items';

export const addItemToCart = async (userId: string, item: ShopItem): Promise<void> => {
    await store.collection(CARTS)
        .doc(userId)
        .collection(ITEMS)
        .doc(item.id)
        .set({
            item: item,
            count: firebase.firestore.FieldValue.increment(1)
        }, { merge: true });
};

export const removeItemFromCart = async (userId: string, itemId: string): Promise<void> => {
    const itemDocumentData: firebase.firestore.DocumentData = await store.collection(CARTS)
        .doc(userId)
        .collection(ITEMS)
        .doc(itemId)
        .get();

    const item: CartItem = itemDocumentData.data() as CartItem;

    if (item.count > 1) {
        await store.collection(CARTS)
            .doc(userId)
            .collection(ITEMS)
            .doc(itemId)
            .update('count', firebase.firestore.FieldValue.increment(-1));
    } else {
        await store.collection(CARTS).doc(userId).collection(ITEMS).doc(itemId).delete();
    }
};
