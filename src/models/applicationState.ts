export enum UserRole {
    User,
    Admin
}

export interface ApplicationUser {
    userId: string;
    username: string;
    role: UserRole; 
}

export interface AuthenticationState {
    isSignedIn: boolean;
    user?: ApplicationUser;
};

export interface ApplicationState {
    auth?: AuthenticationState;
};