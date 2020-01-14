import { ThunkDispatch } from 'redux-thunk';

import { ApplicationState, ApplicationUser, UserRole } from 'models';
import { signIn, signOut, registerUser, updateUser, AuthenticationAction } from 'modules/authentication';

export const signInWithEmailAndPassword = (email: string, password: string) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, AuthenticationAction>) => {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);

        await attemptSignIn(dispatch, userCredential);
};

export const signInWithGoogle = () =>
    async (dispatch: ThunkDispatch<ApplicationState, void, AuthenticationAction>) => {
        const userCredential: firebase.auth.UserCredential = await auth.signInWithPopup(googleAuth);

        await attemptSignIn(dispatch, userCredential);
};

// TODO: refactor the whole thing
const attemptSignIn = async (
    dispatch: ThunkDispatch<ApplicationState, void, AuthenticationAction>,
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

        dispatch(signIn(user));
};

export const attemptSignOut = () =>
    async (dispatch: ThunkDispatch<ApplicationState, void, AuthenticationAction>) => {
        await auth.signOut();

        dispatch(signOut());
};

export const attemptRegisterUser = (email: string, password: string) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, AuthenticationAction>) => {
        const userCredential: firebase.auth.UserCredential = await auth.createUserWithEmailAndPassword(email, password);

        if (userCredential.user) {
            const userId: string = userCredential.user.uid;
            await store.collection('profiles')
                .doc(userId)
                .set({ role: UserRole.User });
        }

        dispatch(registerUser());

        await attemptSignIn(dispatch, userCredential);
};

export const attemptUpdateUser = (user: ApplicationUser) =>
    async (dispatch: ThunkDispatch<ApplicationState, void, AuthenticationAction>) => {
        await store.collection('profiles')
            .doc(user.userId)
            .set({ role: user.role });

        dispatch(updateUser(user));
};

