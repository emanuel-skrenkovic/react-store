import { ApplicationUser } from 'models';
import {
    SignInAction,
    SignOutAction,
    RegisterUserAction,
    SIGN_IN,
    SIGN_OUT,
    REGISTER_USER
} from 'modules/authentication';

export const signIn = (user: ApplicationUser): SignInAction => {
    return { type: SIGN_IN, payload: user };
};

export const signOut = (): SignOutAction => {
    return { type: SIGN_OUT };
};

export const registerUser = (): RegisterUserAction => {
    return { type: REGISTER_USER };
};
