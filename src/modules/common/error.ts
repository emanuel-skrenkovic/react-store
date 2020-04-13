import { history } from 'models';

export const handleError = (err: Error) => {
    console.error(err);

    history.push('/error');
};