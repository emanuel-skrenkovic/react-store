import { ThunkDispatch } from 'redux-thunk';

import { ApplicationState } from 'models';
import { GetCategoriesAction } from 'modules/listing';

export const getCategories = () => (dispatch: ThunkDispatch<any, void, GetCategoriesAction>, getState: () => ApplicationState) => {
    // TODO: move the firebase storage into this module
}