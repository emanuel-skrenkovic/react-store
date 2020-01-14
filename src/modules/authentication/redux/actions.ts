import * as firebase from 'firebase';
import { ThunkDispatch } from 'redux-thunk';

import { ApplicationUser, UserRole } from 'models';
import {
    auth, 
    store,
    googleAuth, 
    SignInAction, 
    SignOutAction, 
    RegisterAction ,
    SIGN_IN,
    SIGN_OUT,
    REGISTER
} from 'modules/authentication';

export const registerUser = (email: string, password: string) =>
    async (dispatch: ThunkDispatch<any, void, RegisterAction>) => {
    const userCredential: firebase.auth.UserCredential = await auth.createUserWithEmailAndPassword(email, password);

    if (userCredential.user) {
        const userId: string = userCredential.user.uid;
        await store.collection('profiles')
            .doc(userId)
            .set({ role: UserRole.User });
    }

    dispatch({ type: REGISTER });

    await signIn(dispatch, userCredential);
};

// TODO: refactor - remove code repetition between auth types
export const signInWithEmailAndPassword = (email: string, password: string) =>
    async (dispatch: ThunkDispatch<any, void, SignInAction>) => {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);

    await signIn(dispatch, userCredential);
};

export const signInWithGoogle = () =>
    async (dispatch: ThunkDispatch<any, void, SignInAction>) => {
    const userCredential: firebase.auth.UserCredential = await auth.signInWithPopup(googleAuth);

    await signIn(dispatch, userCredential);
};

// TODO: refactor the whole thing
const signIn = async (
    dispatch: ThunkDispatch<any, void, SignInAction>,
    userCredential: firebase.auth.UserCredential) => {
    let userId: string  = '';
    let username: string = '';

    if (userCredential.user) {
        userId = userCredential.user.uid;
        username = userCredential.user.displayName || '';
    }

    const profileDocumentSnapshot = await store.collection('profiles').doc(userId).get();
    const profileDocument = profileDocumentSnapshot.data();

    let userRole: UserRole = UserRole.User;
    if (profileDocument) {
        const { role } = profileDocument;
        userRole = UserRole[role as keyof typeof UserRole];
    }

    const user: ApplicationUser = {
        userId: userId,
        username: username,
        role: userRole
    };

    dispatch({ type: SIGN_IN, payload: user }); 
};

export const signOut = () =>
    async (dispatch: ThunkDispatch<any, void, SignOutAction>) => {
    await auth.signOut();

    dispatch({ type: SIGN_OUT });
};