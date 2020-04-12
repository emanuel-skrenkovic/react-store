import * as firebase from "firebase/app";
import 'firebase/firestore';

import { Pagination, SortOrder, Filter, ShopItem, ShopItems } from 'models';
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

export const filterItems = async (filter: Filter, pagination: Pagination, direction: string = 'forward'): Promise<ShopItems> => {
    let documentData: firebase.firestore.DocumentData = store.collection(ITEMS_COLLECTION);

    const { searchString, category, sortOrder } = filter;

    if (searchString) {
        documentData = documentData.where('name', '==', searchString); // TODO: need to implement LIKE instead of equals
    }

    if (category) {
        documentData = documentData.where('category', '==', category);
    }

    const queryDirection: string = sortOrder === SortOrder.PriceHighest ? 'desc' : 'asc';
    documentData = documentData.orderBy('price', queryDirection);

    const { currentPage, pageSize, lastItemPrice } = pagination;

    let nextCurrentPage = currentPage;
    if (lastItemPrice) {
        if (direction === 'forward') {
            documentData = documentData.startAfter(lastItemPrice);
            nextCurrentPage = nextCurrentPage + 1;
        } else {
            documentData = documentData.endBefore(lastItemPrice);
            nextCurrentPage = nextCurrentPage - 1;
        }
    }

    documentData = documentData.limit(pageSize);

    const documents = await documentData.get();

    const items = documents.docs.map(
        (doc: firebase.firestore.QueryDocumentSnapshot) => { return { ...doc.data(), id: doc.id }}) as ShopItem[];

    const metadata = await store.collection('metadata').doc('items').get();
    const data = metadata.data();

    let count: number = 0;
    if (data) {
        count = data.count as number;
    }

    const lastItem = items[items.length - 1];

    const newPagination = {
        lastItemPrice: lastItem ? lastItem.price : undefined,
        totalItemCount: count,
        pageSize: pageSize,
        currentPage: nextCurrentPage
    } as Pagination;

    return { items: items, pagination: newPagination };
};