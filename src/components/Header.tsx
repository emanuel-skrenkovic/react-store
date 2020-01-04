import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { LogInButton, selectAuthInfo } from 'modules/authentication';

const Header: React.FC = () => {
    const { isSignedIn } = useSelector(selectAuthInfo);

    return (
        <div className="ui secondary pointing menu">
            <Link to="/home" className="item">Home</Link>
            <Link to="/listing" className="item">Listing</Link>
            <Link to="/faq" className="item">FAQ</Link>
            <div className="right menu">
                <Link to="/cart" className="item">Cart</Link>
                {isSignedIn ? <LogInButton /> : null}
            </div>
        </div>
    );
};

export default Header;