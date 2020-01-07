import React from 'react';
import { useDispatch } from 'react-redux';

import { history } from 'models';
import { AuthenticationForm, registerUser } from 'modules/authentication';

export const RegisterView: React.FC = () => {
    const dispatch = useDispatch();

    const onFormSubmit = (email: string, password: string) => {
        dispatch(registerUser(email, password));

        history.push('/');
    };

    return (
        <div className="ui container">
            <AuthenticationForm submitButtonText="Register" onFormSubmit={onFormSubmit} />
        </div>
    );
}