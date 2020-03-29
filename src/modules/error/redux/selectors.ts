import { ApplicationState } from 'models';

export const selectErrorMessage = (state: ApplicationState): string =>
    state.error.error ? state.error.error.message : '';