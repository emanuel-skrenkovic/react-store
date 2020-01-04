import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signInWithGoogle, signOut, selectAuthInfo } from 'modules/authentication';

export const LogInButton: React.FC = () => {
    const { isSignedIn } = useSelector(selectAuthInfo);
    const dispatch = useDispatch();

    const onSignInClick = () => {
        if (isSignedIn) {
            dispatch(signOut());
        } else {
            dispatch(signInWithGoogle());
        }
    };

    const buttonText: string = isSignedIn ? 'Sign Out' : 'Sign in with Google';
    return (
        <div>
            <button className="ui google button" onClick={() => onSignInClick()}>
                <i className="red google icon" />
                {buttonText}
            </button>
        </div>
    );
};