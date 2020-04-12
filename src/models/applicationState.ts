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
    items: ShopItems;
    filter: Filter;
    // pagination: Pagination;
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

export interface Pagination {
    // Really don't like this solution for cursor-based paging.
    // The applications state should not know about the API it uses.
    lastItemPrice?: number;
    currentPage: number;
    pageSize: number;
    totalItemCount: number;
}

export interface ShopItems {
   items: ShopItem[];
   pagination: Pagination;
}

export interface Filter {
    sortOrder: SortOrder;
    category: string;
    searchString: string;
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
