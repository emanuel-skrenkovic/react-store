import {ThunkDispatch} from 'redux-thunk';

import { ApplicationState } from 'models';
import { GetCategoriesAction } from 'modules/listing';

export const attemptGetCategories = () => (dispatch: ThunkDispatch<ApplicationState, void, GetCategoriesAction>) => {
    // TODO
};