import {ApplicationState, AuthenticationState, UserRole} from 'models';

export const selectAuthInfo = (state: ApplicationState): AuthenticationState => state.auth;
export const selectIsAdmin = (state: ApplicationState): boolean => {
    const { auth } = state;
    if (auth.user) {
        return auth.user && auth.user.role === UserRole.Admin;
    }

    return false;
};



