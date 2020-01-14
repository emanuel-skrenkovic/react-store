import * as firebase from "firebase";

export enum UserRole {
    User = 'User',
    Admin = 'Admin'
}

export interface ApplicationUser {
    userId: string;
    username: string;
    role: UserRole; 
}

export interface AuthenticationState {
    isSignedIn: boolean;
    user?: ApplicationUser;
}

export interface Category {
    name: string;
}

export interface ShopItem {
    name: string;
    category: string;
    price: number;
}

export interface Listing {
    categories: Category[];
    items: ShopItem[];
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