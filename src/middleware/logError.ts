import { handleError, isPromise } from 'modules/common';

export const logError = (store: any) => (next: any) => (action: any) => {
    try {
        if (!isPromise(action.payload)) {
            next(action);
        } else {
            next(action).catch((err: Error) => {
                handleError(err);
            });
        }
    } catch (err) {
        handleError(err);
    }
};