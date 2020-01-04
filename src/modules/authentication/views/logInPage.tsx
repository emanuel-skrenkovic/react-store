import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { LogInButton, signInWithEmailAndPassword } from 'modules/authentication';

export const LogInPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const onFormSubmit = (event: FormEvent) => {
        event.preventDefault();

        dispatch(signInWithEmailAndPassword(email, password));
    };
    
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
            <LogInButton />
        </div>
    );
};