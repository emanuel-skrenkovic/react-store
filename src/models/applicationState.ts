import { Filter } from 'modules/shop';

export interface IndexedEntity {
    id: string;
}

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

export interface Category extends IndexedEntity {
    name: string;
}

export interface ShopItem extends IndexedEntity {
    name: string;
    category: string;
    price: number;
}

export type Dictionary<TKey extends string | number, TItem> = {
    [key in TKey]: TItem;
}

export interface Categories extends Dictionary<string, Category> { }

export interface ShopItems extends Dictionary<string, ShopItem> { }

export interface Shop {
    categories: Categories
    items: ShopItems;
    filter: Filter;
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
    shop?: Shop;
}
