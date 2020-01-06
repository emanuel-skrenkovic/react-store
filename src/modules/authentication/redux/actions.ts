import { ThunkDispatch } from 'redux-thunk';

import { ApplicationState, ApplicationUser, UserRole } from 'models';
import { 
    db,
    auth, 
    googleAuth, 
    SignInAction, 
    SignOutAction, 
    RegisterAction ,
    SIGN_IN,
    SIGN_OUT,
    REGISTER
} from 'modules/authentication';

export const registerUser = (email: string, password: string) => async (dispatch: ThunkDispatch<any, void, RegisterAction>, getState: () => ApplicationState) => {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    // TODO: set user role

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

const signIn = async (dispatch: ThunkDispatch<any, void, SignInAction>, userCredential: firebase.auth.UserCredential) => {
    let userId: string  = '';
    let username: string = '';
    if (userCredential.user) {
        userId = userCredential.user.uid;
        username = userCredential.user.displayName || '';
    }

    const userProfile = await db.ref(`/profiles/${userId}`).once('value');
    const userRoleValue = userProfile.val().role as string;
    console.log(userProfile);
    console.log(userRoleValue);
    // const userRole: UserRole = UserRole[userRoleValue];

    const user: ApplicationUser = {
        userId: userId,
        username: username,
        role: UserRole.User
    };

    dispatch({ type: SIGN_IN, payload: user }); 
};

export const signOut = () => async (dispatch: ThunkDispatch<any, void, SignOutAction>, getState: () => ApplicationState) => {
    await auth.signOut();

    dispatch({ type: SIGN_OUT });
};