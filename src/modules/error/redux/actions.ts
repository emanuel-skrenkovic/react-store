import { ApplicationError, ApplicationLogLevel, history } from 'models';

export const ADD_ERROR = 'ADD_ERROR';
export const REMOVE_ERROR = 'REMOVE_ERROR';

export interface AddErrorAction {
    type: typeof ADD_ERROR;
    payload: ApplicationError;
}

export interface RemoveErrorAction {
    type: typeof REMOVE_ERROR;
}

export type ErrorAction = AddErrorAction | RemoveErrorAction;

export const addError = (message: string,  trace: string | undefined): AddErrorAction => {
    const error = {
        message: message,
        trace: trace,
        level: ApplicationLogLevel.Error
    } as ApplicationError;

    history.push('/error');

    return { type: ADD_ERROR, payload: error };
};

export const removeError = (): RemoveErrorAction => {
    return { type: REMOVE_ERROR };
};
