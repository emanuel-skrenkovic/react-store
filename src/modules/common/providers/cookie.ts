import { ApplicationState } from 'models';

const REDUX_STATE = 'redux-state';

export const saveStateToCookie = (state: ApplicationState) => {
    window.sessionStorage.setItem(REDUX_STATE, JSON.stringify(state));

    document.cookie = `${REDUX_STATE}=${JSON.stringify(state)}; expires=0`;
};

export const readStateFromCookie = (): ApplicationState => {
    const serializedState = getCookie(REDUX_STATE);

    if (!serializedState) {
        return {} as ApplicationState;
    }

    return JSON.parse(serializedState);
};

const getCookie = (cookieName: string) => {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};