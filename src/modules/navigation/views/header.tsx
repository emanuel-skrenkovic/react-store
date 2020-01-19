import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectAuthInfo, attemptSignOut } from 'modules/authentication';
import { UserRole } from 'models';

export const Header: React.FC = () => {
    const { isSignedIn, user } = useSelector(selectAuthInfo);
    const { username } = user || {};

    const dispatch = useDispatch();

    const renderAuth = () => {
        if (user) {
            return <div className="ui center aligned">{username}</div>;
        }

        return (
            <span>
                <Link to="/login">Sign in</Link>
                {' '}or{' '}
                <Link to="/register">register</Link>
                !
            </span>
        );
    };

    return (
        <div className="ui secondary pointing menu">
            <span>Hi!{' '}{renderAuth()}</span>
            <Link className="item" to="/home">Home</Link>
            <Link className="item" to="/listing">Listing</Link>
            <Link className="item" to="/faq">FAQ</Link>
            {user && user.role === UserRole.Admin && <Link to="/admin" className="item">Administration</Link>}
            <div className="right menu">
                <Link to="/cart" className="item">Cart</Link>
                {isSignedIn
                    ? <button className="item" onClick={() => dispatch(attemptSignOut())}>Sign Out</button>
                    : null}
            </div>
        </div>
    );
};