import { ApplicationError, ApplicationLogLevel } from 'models';
import { AddErrorAction, RemoveErrorAction, ADD_ERROR, REMOVE_ERROR } from 'modules/error';

export const addError = (message: string,  trace: string | undefined): AddErrorAction => {
    const error = {
        message: message,
        trace: trace,
        level: ApplicationLogLevel.Error
    } as ApplicationError;

    return { type: ADD_ERROR, payload: error };
};

export const removeError = (): RemoveErrorAction => {
    return { type: REMOVE_ERROR };
};
