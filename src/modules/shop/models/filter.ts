import { Category } from 'models';

export enum SortOrder {
    PriceLowest = 'PriceLowest',
    PriceHighest = 'PriceHighest'
}

export interface Filter {
    sortOrder: SortOrder;
    categories: Category[];
    searchString: string;
}