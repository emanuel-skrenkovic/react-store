import { ThunkDispatch } from 'redux-thunk';

import { ApplicationState, ApplicationUser, UserRole } from 'models';
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

export const registerUser = (email: string, password: string) => async (dispatch: ThunkDispatch<any, void, RegisterAction>, getState: () => ApplicationState) => {
    const userCredential: firebase.auth.UserCredential = await auth.createUserWithEmailAndPassword(email, password);
    // TODO: set user role

    if (userCredential.user) {
        const userId: string = userCredential.user.uid;
        await store.collection('profiles')
            .doc(userId)
            .set({ role: UserRole.User });
    }

    dispatch({ type: REGISTER });

    signIn(dispatch, userCredential);
}

// TODO: refactor - remove code repetition between auth types
export const signInWithEmailAndPassword = (email: string, password: string) => async (dispatch: ThunkDispatch<any, void, SignInAction>, getState: () => ApplicationState) => {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);

    signIn(dispatch, userCredential);
};

export const signInWithGoogle = () => async (dispatch: ThunkDispatch<any, void, SignInAction>, getState: () => ApplicationState) => {
    const userCredential: firebase.auth.UserCredential = await auth.signInWithPopup(googleAuth);

    signIn(dispatch, userCredential);
};

// TODO: refactor the whole thing
const signIn = async (dispatch: ThunkDispatch<any, void, SignInAction>, userCredential: firebase.auth.UserCredential) => {
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

export const signOut = () => async (dispatch: ThunkDispatch<any, void, SignOutAction>, getState: () => ApplicationState) => {
    await auth.signOut();

    dispatch({ type: SIGN_OUT });
};