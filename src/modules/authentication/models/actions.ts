import { ApplicationUser } from 'models';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const REGISTER = 'REGISTER';
export const UPDATE_USER = 'UPDATE_USER';

export interface SignInAction {
    type: typeof SIGN_IN;
    payload: ApplicationUser
}

export interface SignOutAction {
    type: typeof SIGN_OUT;
}

export interface RegisterAction {
    type: typeof REGISTER;
}

export type AuthenticationAction = SignInAction | SignOutAction | RegisterAction;
