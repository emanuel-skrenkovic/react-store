import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectAuthInfo, signOut } from 'modules/authentication';
import { UserRole } from 'models';

export const Header: React.FC = () => {
    const { isSignedIn, user } = useSelector(selectAuthInfo);
    const { username } = user || {};

    const dispatch = useDispatch();

    const renderAdmin = () => {
        if (!user) {
            return;
        }

        if (user.role === UserRole.Admin) {
            return <Link to="/admin" className="item">Administration</Link>;
        }
    };

    const renderAuth = () => {
        if (user) {
            return <span>{username}</span>;
        }

        return (
            <div className="ui center aligned">
                <Link to="/login">Sign in</Link>
                {' '}or{' '}
                <Link to="/register">register</Link>
                !
            </div>
        );
    };

    return (
        <div className="ui secondary pointing menu">
            Hi!{' '}{renderAuth()}
            <Link to="/home" className="item">Home</Link>
            <Link to="/listing" className="item">Listing</Link>
            <Link to="/faq" className="item">FAQ</Link>
            {renderAdmin()}
            <div className="right menu">
                <Link to="/cart" className="item">Cart</Link>
                {isSignedIn 
                    ? <button className="ui button" onClick={() => dispatch(signOut())}>Sign Out</button> 
                    : null}
            </div>
        </div>
    );
};