import { AuthenticationState } from 'models';
import { AuthenticationAction, SIGN_IN, SIGN_OUT } from 'modules/authentication';

const INITIAL_STATE: AuthenticationState = {
    isSignedIn: false
};

export const authReducer = (
    state: AuthenticationState = INITIAL_STATE,  action: AuthenticationAction): AuthenticationState => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, user: action.payload };

        case SIGN_OUT:
            return { ...state, isSignedIn: false, user: undefined };

        default:
            return state;
    }
};