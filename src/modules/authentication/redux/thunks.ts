import { ThunkDispatch } from 'redux-thunk';

import { ApplicationState, ApplicationUser, UserRole } from 'models';
import * as auth from 'modules/common/providers';
import {
    signIn,
    signOut,
    registerUser,
    AuthenticationAction
} from 'modules/authentication';

export const attemptSignInWithEmailAndPassword = (email: string, password: string) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, AuthenticationAction>) => {
        const user: ApplicationUser = await auth.signInWithEmailAndPassword(email, password);

        dispatch(signIn(user));
};

export const attemptSignInWithGoogle = () =>
    async (dispatch: ThunkDispatch<ApplicationState, void, AuthenticationAction>) => {
        const user: ApplicationUser = await auth.signInWithGoogle();

        dispatch(signIn(user));
};

export const attemptSignOut = () =>
    async (dispatch: ThunkDispatch<ApplicationState, void, AuthenticationAction>) => {
        await auth.signOut();

        dispatch(signOut());
};

export const attemptRegisterUser = (email: string, password: string) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, AuthenticationAction>) => {
        await auth.registerUser(email, password, UserRole.User);

        const user: ApplicationUser = await auth.signInWithEmailAndPassword(email, password);

        dispatch(registerUser());
        dispatch(signIn(user));
};
