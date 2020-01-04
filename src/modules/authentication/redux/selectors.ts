export const getUserId = (state: any): string => {
    return state.userId;
};

interface AuthInfo {
    userId: string;
    isSignedIn: boolean;
}

export const selectAuthInfo = (state: any): AuthInfo => {
    return { 
        userId: state.auth.userId || '',
        isSignedIn: state.auth.isSignedIn || false
    };
}