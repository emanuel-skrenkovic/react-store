import * as firebase from "firebase/app";
import 'firebase/firestore';

import { Pagination, SortOrder, Filter, ShopItem } from 'models';
import { store }  from "modules/common";

const ITEMS_COLLECTION = 'items';

export const fetchItemById = async (id: string): Promise<ShopItem> => {
    const documentData: firebase.firestore.DocumentData = await store.collection(ITEMS_COLLECTION)
        .doc(id)
        .get();

    return documentData.data() as ShopItem;
};

export const fetchItems = async (): Promise<ShopItem[]> => {
    const documents = await store.collection(ITEMS_COLLECTION).get();

    return documents.docs.map(
        (doc: firebase.firestore.QueryDocumentSnapshot) => { return { ...doc.data(), id: doc.id }}) as ShopItem[];
};

export const filterItems = async (filter: Filter, pagination: Pagination): Promise<ShopItem[]> => {
    let documentData: firebase.firestore.DocumentData = store.collection(ITEMS_COLLECTION);

    const { searchString, category, sortOrder } = filter;
    const { pageSize, lastItemId } = pagination;

    if (searchString) {
        documentData = documentData.where('name', '==', searchString); // TODO: need to implement LIKE instead of equals
    }

    if (category) {
        documentData = documentData.where('category', '==', category);
    }

    const queryDirection: string = sortOrder === SortOrder.PriceHighest ? 'desc' : 'asc';
    documentData = documentData.orderBy('price', queryDirection);

    if (lastItemId) {
        documentData = documentData.startAfter(lastItemId);
    }

    documentData = documentData.limit(pageSize);

    console.log(documentData);

    const documents = await documentData.get();

    return documents.docs.map(
        (doc: firebase.firestore.QueryDocumentSnapshot) => { return { ...doc.data(), id: doc.id }}) as ShopItem[];
};