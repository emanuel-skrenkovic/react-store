import { ApplicationUser } from 'models';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const REGISTER_USER = 'REGISTER_USER';

export interface SignInAction {
    type: typeof SIGN_IN;
    payload: ApplicationUser;
}

export interface SignOutAction {
    type: typeof SIGN_OUT;
}

export interface RegisterUserAction {
    type: typeof REGISTER_USER;
}

export type AuthenticationAction =
    SignInAction
    | SignOutAction
    | RegisterUserAction;
