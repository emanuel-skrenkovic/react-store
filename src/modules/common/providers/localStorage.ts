import { ApplicationState } from 'models';

const REDUX_STATE = 'redux-state';

export const saveState = (state: ApplicationState) => {
    try {
        localStorage.setItem(REDUX_STATE, JSON.stringify(state));
    } catch (err) {
        // ignore errors
    }
};

export const readState = (): ApplicationState | undefined => {
    try {
        const serializedState: string | null = localStorage.getItem(REDUX_STATE);

        if (!serializedState) {
            return undefined;
        }

        return JSON.parse(serializedState) as ApplicationState;
    } catch(err) {
        return undefined;
    }
};
