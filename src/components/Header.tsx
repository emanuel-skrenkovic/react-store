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

    // TODO: offer logout if logged in
    return (
        <div className="ui secondary pointing menu">
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