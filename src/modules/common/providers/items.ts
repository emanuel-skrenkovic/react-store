import * as firebase from "firebase/app";
import 'firebase/firestore';

import {Filter, Pagination, PaginationDirection, ShopItem, ShopItems, SortOrder} from 'models';
import {convertArrayToMap, mapToIndexedEntities, store} from "modules/common";

const ITEMS_COLLECTION = 'items';

export const fetchItemById = async (id: string): Promise<ShopItem> => {
    const documentData: firebase.firestore.DocumentData = await store.collection(ITEMS_COLLECTION)
        .doc(id)
        .get();

    return documentData.data() as ShopItem;
};

export const fetchItems = async (): Promise<ShopItem[]> => {
    const documents = await store.collection(ITEMS_COLLECTION).get();

    return mapToIndexedEntities<ShopItem>(documents.docs);
};

export const filterItems = async (
    filter: Filter,
    pagination: Pagination,
    cursor: any = undefined,
    direction?: PaginationDirection): Promise<ShopItems> => {
    let query: firebase.firestore.DocumentData = store.collection(ITEMS_COLLECTION);

    const { searchString, category, sortBy, sortOrder } = filter;

    if (searchString) {
        query = query.where('name', '==', searchString); // TODO: need to implement LIKE instead of equals
    }

    if (category) {
        query = query.where('category', '==', category);
    }

    query = query.orderBy(sortBy, sortOrder === SortOrder.Descending ? 'desc' : 'asc');

    const { pageSize } = pagination;

    if (cursor && direction !== null && direction !== undefined) {
        query = direction === PaginationDirection.Forward ? query.startAfter(cursor) : query.endBefore(cursor);
    }

    query = query.limit(pageSize);

    const documents = await query.get();

    const items: ShopItem[] = mapToIndexedEntities<ShopItem>(documents.docs);

    const metadata = await store.collection('metadata').doc('items').get();
    const data = metadata.data();

    const count: number = (data && data.count) || 0;

    return { items: convertArrayToMap(items), totalItemCount: count };
};
