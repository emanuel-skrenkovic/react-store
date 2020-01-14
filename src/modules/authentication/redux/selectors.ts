import { createSelector } from 'reselect';

import { ApplicationState, AuthenticationState } from 'models';

const selectAuthInfo = (state: ApplicationState): AuthenticationState => {
    return { 
        user: state?.auth?.user || undefined,
        isSignedIn: state?.auth?.isSignedIn || false
    };
};
