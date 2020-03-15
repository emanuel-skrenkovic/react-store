import { Category, Filter } from 'models';

export interface ShopFilterProps {
    onSubmit: (filter: Filter) => void;
    categories: Category[];
    initialFilter?: Filter;
}