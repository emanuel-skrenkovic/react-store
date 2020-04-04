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
    id: string;
    name: string;
    category: string;
    price: number;
}

export type Dictionary<TKey extends string | number, TItem> = {
    [key in TKey]: TItem;
}

export interface Categories extends Dictionary<string, Category> { }

export interface Shop {
    categories: Categories
    items: ShopItem[];
    filter: Filter;
}

export interface CartItem {
    item: ShopItem;
    count: number;
}

export interface CartItems extends Dictionary<string, CartItem> { }

export interface Cart {
    items: CartItems;
    totalCost: number;
}

export enum SortOrder {
    PriceLowest = 'PriceLowest',
    PriceHighest = 'PriceHighest'
}

export interface Filter {
    sortOrder: SortOrder;
    category: string;
    searchString: string;
    pageNumber: number;
    pageSize: number;
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
    auth: AuthenticationState;
    shop: Shop;
    cart: Cart;
}
