import { AuthenticationState } from 'models';

export const selectAuthInfo = (state: any): AuthenticationState => {
    return { 
        user: state.auth.user,
        isSignedIn: state.auth.isSignedIn || false
    };
}