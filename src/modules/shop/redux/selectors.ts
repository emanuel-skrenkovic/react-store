import { ApplicationState } from 'models';

export const shopItemsSelector = (state: ApplicationState) => state.shop.items.items;
export const shopCategoriesSelector = (state: ApplicationState) => state.shop.categories;
export const shopFilterSelector = (state: ApplicationState) => state.shop.filter;
export const shopPaginationSelector = (state: ApplicationState) => state.shop.items.pagination;
export const lastItemPriceSelector = (state: ApplicationState) => {
    const { items } = state.shop.items;
    const lastItem = items[items.length - 1];

    return lastItem.price;
};
