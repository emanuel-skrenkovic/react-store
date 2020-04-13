import { addError } from 'modules/error';

export const handleError = (err: Error, dispatch: any) => {
    dispatch(addError(err.message, err.stack));
};