import { ApplicationError } from 'models';

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