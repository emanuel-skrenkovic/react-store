import React, { useState, FormEvent } from 'react';

interface AuthenticationFormProps {
    submitButtonText: string;
    onFormSubmit: (email: string, password: string) => void
}

export const AuthenticationForm: React.FC<AuthenticationFormProps> = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onFormSubmit = (event: FormEvent) => {
        event.preventDefault();

        props.onFormSubmit(email, password);
    }

    return (
        <div className="ui container">
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
                <button className="ui button blue" type="submit">{props.submitButtonText}</button>
            </form>
        </div>
    );
};