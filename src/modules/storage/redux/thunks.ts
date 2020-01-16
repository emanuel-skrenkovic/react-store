import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { ThunkDispatch } from "redux-thunk";

import { ApplicationState, ApplicationUser, Category, ShopItem } from 'models';
import {
    StorageAction,
    getCategory,
    getCategories,
    addCategory,
    deleteCategory,
    getItem,
    getItems,
    addItem,
    deleteItem,
    getUser,
    addUser,
    updateUser
} from 'modules/storage'

// TODO: pull from app config?
const config = {
    apiKey: 'AIzaSyDpyqsFjlekVMNqkX8Hq9FzpHooV4vgP_o',
    authDomain: 'react-store-8b075.firebaseapp.com',
    projectId: 'react-store-8b075',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
    ]
};

const appName: string = 'react-store';

const app: firebase.app.App = firebase.initializeApp(config, appName);

export const googleAuth: firebase.auth.AuthProvider = new firebase.auth.GoogleAuthProvider();
export const auth: firebase.auth.Auth = firebase.auth(app);
export const store: firebase.firestore.Firestore = firebase.firestore(app);

const getDocument = async <T>(collection: string, documentReference: string)
    : Promise<T> => {
        const documentData: firebase.firestore.DocumentData = await store.collection(collection)
            .doc(documentReference)
            .get();

        return documentData.data() as T;
};

const getDocuments = async <T>(collection: string): Promise<T> => {
    const documentData: firebase.firestore.DocumentData = await store.collection(collection).get();

    return documentData.data() as T;
};

const storeDocument = async <T>(collection: string, document: T): Promise<void> => {
    await store.collection(collection).add(document);
};

const updateDocument = async <T>(collection: string, document: T): Promise<void> => {
    // TODO: example code below
    // const userId: string = userCredential.user.uid;
    // await store.collection('profiles')
    //     .doc(userid)
    //     .set({ role: userrole.user });
};

const deleteDocument = async (collection: string, documentId: string): Promise<void> => {
    await store.collection(collection).doc(documentId).delete();
};

export const attemptGetItem = (itemId: string) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, StorageAction>) => {
        const item: ShopItem = await getDocument<ShopItem>('items', itemId);

        dispatch(getItem(item));
};

export const attemptGetItems = () =>
    async (dispatch: ThunkDispatch<ApplicationState, void, StorageAction>) => {
        const items: ShopItem[] = await getDocuments<ShopItem[]>('items');

        dispatch(getItems(items));
};

export const attemptAddItem  = (item: ShopItem) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, StorageAction>) => {
        await storeDocument('items', item);

        dispatch(addItem(item));
};

export const attemptUpdateItem = (item: ShopItem) =>
    (dispatch: ThunkDispatch<ApplicationState, void, StorageAction>) => {

};

export const attemptDeleteItem = (itemId: string) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, StorageAction>) => {
        await deleteDocument('items', itemId);

        dispatch(deleteItem(itemId));
};

export const attemptGetCategory = (categoryId: string) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, StorageAction>) => {
        const category: Category = await getDocument<Category>('categories', categoryId);

        dispatch(getCategory(category));
};

export const attemptGetCategories = () => async (dispatch: ThunkDispatch<ApplicationState, void, StorageAction>) => {
    const categories: Category[] = await getDocuments<Category[]>('categories');

    dispatch(getCategories(categories));
};

export const attemptAddCategory = (category: Category) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, StorageAction>) => {
        await storeDocument('categories', category);

        dispatch(addCategory(category));
};

export const attemptUpdateCategory = (category: Category) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, StorageAction>) => {

};

export const attemptDeleteCategory = (categoryId: string) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, StorageAction>) => {
        await deleteDocument('categories', categoryId);

        dispatch(deleteCategory(categoryId));
};

export const attemptGetUser = (userId: string) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, StorageAction>) => {
        const user: ApplicationUser = await getDocument<ApplicationUser>('profiles', userId);

        dispatch(getUser(user));
};

export const attemptAddUser = (user: ApplicationUser) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, StorageAction>) => {
    await storeDocument<ApplicationUser>('profiles', user);

    dispatch(addUser(user));
};

export const attemptUpdateUser = (user: ApplicationUser) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, StorageAction>) => {

};