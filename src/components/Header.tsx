import React from 'react';
import { Link } from 'react-router-dom';
import { LogInButton } from 'modules/authentication';

const Header: React.FC = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/home" className="item">Home</Link>
            <Link to="/listing" className="item">Listing</Link>
            <Link to="/faq" className="item">FAQ</Link>
            <div className="right menu">
                <Link to="/cart" className="item">Cart</Link>
                <LogInButton />
            </div>
        </div>
    );
};

export default Header;