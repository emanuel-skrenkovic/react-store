import { createSelector } from 'reselect';

import { ApplicationState, AuthenticationState } from 'models';

export const selectAuthInfo = (state: ApplicationState): AuthenticationState => {
    // TODO: shouldn't this just return state.auth?
    return {
        user: state.auth ? state.auth.user : undefined,
        isSignedIn: state.auth ? state.auth.isSignedIn : false
    };
};
