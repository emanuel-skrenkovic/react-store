import React, { useState, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { history } from 'models/history';
import { 
    signInWithEmailAndPassword, 
    signInWithGoogle, 
    selectAuthInfo 
} from 'modules/authentication';

// TODO: move login form to separate component; create register form
export const LogInPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { isSignedIn } = useSelector(selectAuthInfo);
    const dispatch = useDispatch();

    const onFormSubmit = (event: FormEvent) => {
        event.preventDefault();

        dispatch(signInWithEmailAndPassword(email, password));

        // TODO: handle login failure
        history.push('/');
    };

    const onGoogleSignInClick = () => {
        dispatch(signInWithGoogle());
        history.push('/');
    };
    
    const googleSignInButtonText: string = isSignedIn ? 'Sign Out' : 'Sign in with Google';
    return (
        <div className="ui container">
            <div>
                <form className="ui form" onSubmit={onFormSubmit}>
                    <div className="field">
                        <label>Email</label>
                        <input 
                            type="text" 
                            value={email} 
                            onChange={(event: FormEvent<HTMLInputElement>) => setEmail(event.currentTarget.value)} />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(event: FormEvent<HTMLInputElement>) => setPassword(event.currentTarget.value)} />
                    </div>
                    <button className="ui button" type="submit">Sign In</button>
                </form>
            </div>
            <button className="ui google button" onClick={() => onGoogleSignInClick()}>
                <i className="red google icon" />
                {googleSignInButtonText}
            </button>
        </div>
    );
};