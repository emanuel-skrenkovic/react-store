import { ApplicationState } from 'models';

export const shopItemsSelector = (state: ApplicationState) => state.shop.shopItems;
export const shopCategoriesSelector = (state: ApplicationState) => state.shop.categories;
export const shopFilterSelector = (state: ApplicationState) => state.shop.filter;
export const shopPaginationSelector = (state: ApplicationState) => state.shop.pagination;
