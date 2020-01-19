import * as firebase from "firebase";

import { ApplicationUser, UserRole } from "models";
import { auth, store, googleAuth, getDocument } from 'modules/common/providers';


export const signInWithGoogle = async (): Promise<ApplicationUser> => {
    const userCredential: firebase.auth.UserCredential = await auth.signInWithPopup(googleAuth);

    return signIn(userCredential);
};

export const signInWithEmailAndPassword = async (email: string, password: string): Promise<ApplicationUser> => {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);

    return signIn(userCredential);
};

export const signOut = async (): Promise<void> => {
    return auth.signOut();
};

const signIn = async (userCredential: firebase.auth.UserCredential): Promise<ApplicationUser> => {
    // TODO: refactor
    let userId: string  = '';
    let username: string = '';

    if (userCredential.user) {
        userId = userCredential.user.uid;
        username = userCredential.user.displayName || '';
    }

    const { role } = await getDocument<ApplicationUser>('profiles', userId);

    return { userId, username, role };
};

export const registerUser = async (email: string, password: string, role: UserRole): Promise<void> => {
    const userCredential: firebase.auth.UserCredential = await auth.createUserWithEmailAndPassword(email, password);

    if (userCredential.user) {
        const userId: string = userCredential.user.uid;
        await store.collection('profiles')
            .doc(userId)
            .set({ role: role });
    }
};