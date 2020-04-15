import { ApplicationState } from 'models';

export const adminSelector = (state: ApplicationState) => state.administration;
export const adminItemsSelector = (state: ApplicationState) => state.administration.items;
export const adminCategoriesSelector = (state: ApplicationState) => state.administration.categories;
export const adminCategoriesListSelector = (state: ApplicationState) => Object.values(state.administration.categories);