import * as firebase from "firebase/app";
import 'firebase/firestore';

import { IndexedEntity } from 'models';
import { store } from "modules/common/providers";

export const getDocument = async <T>(collection: string, documentReference: string)
    : Promise<T> => {
    const documentData: firebase.firestore.DocumentData = await store.collection(collection)
        .doc(documentReference)
        .get();

    return documentData.data() as T;
};

export const getDocuments = async <T extends Array<IndexedEntity>>(collection: string): Promise<T> => {
    const documentData: firebase.firestore.DocumentData = await store.collection(collection).get();

    return documentData.docs.map(
        (doc: firebase.firestore.QueryDocumentSnapshot) => { return { ...doc.data(), id: doc.id }}) as T;
};

export const storeDocument = async <T extends IndexedEntity>(collection: string, document: T): Promise<void> => {
    await store.collection(collection).add(document);
};

export const updateDocument = async <T>(collection: string, documentId: string, document: T): Promise<void> => {
    await store.collection(collection)
        .doc(documentId)
        .set(document, { merge: true });
};