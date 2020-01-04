import { auth, googleAuth } from 'modules/authentication';
import { ThunkDispatch } from 'redux-thunk';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export interface LogInAction {
    type: typeof SIGN_IN;
    payload: string
}

export interface LogOutAction {
    type: typeof SIGN_OUT;
}

export type AuthenticationAction = LogInAction | LogOutAction;

export const signInWithGoogle = () => async (dispatch: ThunkDispatch<any, void, LogInAction>, getState: () => any) => {
    const userCredential: firebase.auth.UserCredential = await auth.signInWithPopup(googleAuth);

    let userId: string  = '';
    if (userCredential.user) {
        userId = userCredential.user.uid;
    }

    dispatch({ type: SIGN_IN, payload: userId });
};

export const signOut = () => async (dispatch: ThunkDispatch<any, void, LogOutAction>, getState: () => any) => {
    await auth.signOut();

    dispatch({ type: SIGN_OUT });
};