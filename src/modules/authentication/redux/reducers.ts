import { SIGN_IN, SIGN_OUT, AuthenticationAction } from 'modules/authentication';

interface AuthenticationState {
    isSignedIn: boolean;
    userId: string;
};

const INITIAL_STATE: AuthenticationState = {
    isSignedIn: false,
    userId: ''
};

export const authReducer = (state: any, action: AuthenticationAction) => {
    if (!state) {
        state = INITIAL_STATE;
    }

    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload };

        case SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null };

        default:
            return state;
    }
};