import { ApplicationState, AuthenticationState } from 'models';

export const selectAuthInfo = (state: ApplicationState): AuthenticationState => state.auth;
