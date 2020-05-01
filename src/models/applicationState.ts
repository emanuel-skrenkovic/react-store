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
    shopItems: ShopItems;
    filter: Filter;
    pagination: Pagination;
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
    Ascending,
    Descending
}

export enum PaginationDirection {
    Forward,
    Backward
}

export interface Pagination {
    currentPage: number;
    pageSize: number;
    direction: PaginationDirection;
}

export interface ShopItems {
    items: Dictionary<string, ShopItem>;
    totalItemCount: number;
}

export enum ItemSortCriterion {
    Price = 'price',
    Name = 'name',
    Category = 'category'
}

export interface Filter {
    sortOrder: SortOrder;
    sortBy: ItemSortCriterion;
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
