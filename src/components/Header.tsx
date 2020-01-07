import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectAuthInfo } from 'modules/authentication';
import { UserRole } from 'models';

export const Header: React.FC = () => {
    const { isSignedIn, user } = useSelector(selectAuthInfo);
    const { username } = user || {};

    const renderAdmin = () => {
        if (!user) {
            return;
        }

        if (user.role === UserRole.Admin) {
            return <Link to="/admin" className="item">Administration</Link>;
        }
    }

    const renderAuth = () => {
        if (user) {
            return <span>{username}</span>;
        }

        // disgusting
        return (
            <div className="ui center aligned">
                <Link to="/login">Sign in&nbsp;</Link>
                or&nbsp;
                <Link to="/register">register</Link>
                !
            </div>
        );
    }

    return (
        <div className="ui secondary pointing menu">
            Hi! &nbsp;{renderAuth()}
            <Link to="/home" className="item">Home</Link>
            <Link to="/listing" className="item">Listing</Link>
            <Link to="/faq" className="item">FAQ</Link>
            {renderAdmin()}
            <div className="right menu">
                <Link to="/cart" className="item">Cart</Link>
                {(isSignedIn && username) ? username : ''}
            </div>
        </div>
    );
};