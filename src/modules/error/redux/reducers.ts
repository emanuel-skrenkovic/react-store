import { ErrorState, ApplicationError } from 'models';
import { ErrorAction, ADD_ERROR, REMOVE_ERROR } from 'modules/error';

const INITIAL_STATE: ErrorState = {
    error: {} as ApplicationError
};

export const errorReducer = (state: ErrorState = INITIAL_STATE,  action: ErrorAction): ErrorState => {
    switch (action.type) {
        case ADD_ERROR:
            return { ...state, error: action.payload };

        case REMOVE_ERROR:
            return { ...state, error: {} as ApplicationError };

        default:
            return state;
    }
};
