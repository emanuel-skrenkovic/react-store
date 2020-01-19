import * as firebase from "firebase";

export enum UserRole {
    User = 'User',
    Admin = 'Admin'
}

export interface ApplicationUser {
    userId: string;
    username: string;
    role?: UserRole;
}

export interface AuthenticationState {
    isSignedIn: boolean;
    user?: ApplicationUser;
}

export interface Category {
    id: string;
    name: string;
}

export interface ShopItem {
    id: string;
    name: string;
    category: string;
    price: number;
}

type Dictionary<TKey extends string | number, TItem> = {
    [key in TKey]: TItem;
}

export interface Categories extends Dictionary<string, Category> { }

export interface ShopItems extends Dictionary<string, ShopItem> { }

export interface Listing {
    categories: Categories
    items: ShopItems;
}

export interface FirebaseConfiguration {
    appName: string;
    config: any;
}

export interface ApplicationSettings {
    firebase: FirebaseConfiguration;
}

export interface ApplicationState {
    appSettings: ApplicationSettings;
    auth?: AuthenticationState;
    listing?: Listing;
}

export const initialState: ApplicationState = {
    appSettings: {
        firebase: {
            appName: 'react-store',
            config: {
                apiKey: 'AIzaSyDpyqsFjlekVMNqkX7Hq9FzpHooV4vgP_o',
                authDomain: 'react-store-9b075.firebaseapp.com',
                projectId: 'react-store-9b075',
                signInOptions: [
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
                ]
            }
        }
    }
};