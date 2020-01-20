import { Category } from 'models';

export enum SortOrder {
    PriceLowest,
    PriceHighest
}

export interface ShopFilter {
    sortOrder: SortOrder;
    categories: Category[];
    searchString: string;
}