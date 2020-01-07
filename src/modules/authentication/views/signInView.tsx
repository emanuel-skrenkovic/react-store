import React from 'react';
import { useDispatch } from 'react-redux';

import { history } from 'models/history';
import { 
    AuthenticationForm,
    signInWithEmailAndPassword, 
    signInWithGoogle, 
} from 'modules/authentication';

export const SignInView: React.FC = () => {
    const dispatch = useDispatch();

    const onFormSubmit = (email: string, password: string) => {
        dispatch(signInWithEmailAndPassword(email, password));

        // TODO: handle login failure
        history.push('/');
    };

    const onGoogleSignInClick = () => {
        dispatch(signInWithGoogle());
        history.push('/');
    };
    
    const onRegisterClick = () => {
        history.push('/register');
    };

    return (
        <div className="ui two column grid container">
            <div className="column">
                <AuthenticationForm submitButtonText="Sign In" onFormSubmit={onFormSubmit} />
                <button className="ui button red" onClick={onRegisterClick}>Sign Up</button>
            </div>
            <div className="column">
                <button className="ui google button" onClick={() => onGoogleSignInClick()}>
                    <i className="red google icon" />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};