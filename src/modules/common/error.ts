import { addError } from 'modules/error';

export const handleError = (err: Error, dispatch: any) => {
    console.error(err);
    dispatch(addError(err.message, err.stack));
};