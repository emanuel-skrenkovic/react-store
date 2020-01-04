import { auth, googleAuth } from 'modules/authentication';
import { ThunkDispatch } from 'redux-thunk';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export interface SignInAction {
    type: typeof SIGN_IN;
    payload: string
}

export interface SignOutAction {
    type: typeof SIGN_OUT;
}

export type AuthenticationAction = SignInAction | SignOutAction;

// TODO: refactor - remove code repetition between sign in types
export const signInWithEmailAndPassword = (email: string, password: string) => async (dispatch: ThunkDispatch<any, void, SignInAction>, getState: () => any) => {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);

    signIn(dispatch, userCredential);
};

export const signInWithGoogle = () => async (dispatch: ThunkDispatch<any, void, SignInAction>, getState: () => any) => {
    const userCredential: firebase.auth.UserCredential = await auth.signInWithPopup(googleAuth);

    signIn(dispatch, userCredential);
};

const signIn = (dispatch: ThunkDispatch<any, void, SignInAction>, userCredential: firebase.auth.UserCredential) => {
    let userId: string  = '';
    if (userCredential.user) {
        userId = userCredential.user.uid;
    }

    dispatch({ type: SIGN_IN, payload: userId }); 
};

export const signOut = () => async (dispatch: ThunkDispatch<any, void, SignOutAction>, getState: () => any) => {
    await auth.signOut();

    dispatch({ type: SIGN_OUT });
};