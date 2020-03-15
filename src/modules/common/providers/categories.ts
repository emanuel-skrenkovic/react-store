import * as firebase from "firebase/app";
import 'firebase/firestore';

import { Category } from 'models';
import { store }  from "modules/common";

const CATEGORIES_COLLECTION = 'categories';

export const fetchCategoryById = async (id: string): Promise<Category> => {
    const documentData: firebase.firestore.DocumentData = await store.collection(CATEGORIES_COLLECTION)
        .doc(id)
        .get();

    return documentData as Category;
};

export const fetchCategoryByName = async (name: string): Promise<Category> => {
    const documentData: firebase.firestore.DocumentData = await store.collection(CATEGORIES_COLLECTION)
        .where('name', '==', name)
        .get();

    return documentData as Category;
};

export const fetchCategories = async (): Promise<Category[]> => {
    const documents = await store.collection(CATEGORIES_COLLECTION).get();

    return documents.docs.map(
        (doc: firebase.firestore.QueryDocumentSnapshot) => { return { ...doc.data(), id: doc.id }}) as Category[];
};
