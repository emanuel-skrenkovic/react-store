import { Category } from 'models';

export enum SortOrder {
    PriceLowest = 'PriceLowest',
    PriceHighest = 'PriceHighest'
}

export interface Filter {
    sortOrder: SortOrder;
    category: string;
    searchString: string;
}

export interface ShopFilterProps {
    categories: Category[];
    onSubmit: (filter: Filter) => void;
    initialFilter?: Filter;
}