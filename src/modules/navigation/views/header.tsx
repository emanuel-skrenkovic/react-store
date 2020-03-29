import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { selectAuthInfo, attemptSignOut } from 'modules/authentication';
import { selectCartItemCount } from 'modules/cart';
import { UserRole } from 'models';

export const Header: React.FC = () => {
    const { isSignedIn, user } = useSelector(selectAuthInfo);
    const { username } = user || {};
    const cartItemCount = useSelector(selectCartItemCount);

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

    const { pathname } = useLocation();
    const getTabStyle = (linkPath: string) => {
        return linkPath === pathname
            ? 'active item'
            : 'item';
    };

    return (
        <div className="ui tabular menu">
            <span>Hi!{' '}{renderAuth()}</span>
            <Link className={getTabStyle('/home')} to="/home">Home</Link>
            <Link className={getTabStyle('/listing')} to="/listing">Listing</Link>
            <Link className={getTabStyle('/faq')} to="/faq">FAQ</Link>
            {user && user.role === UserRole.Admin && <Link to="/admin" className={getTabStyle('/admin')}>Administration</Link>}
            <div className="ui tabular right menu">
                <div>
                    <Link to="/cart" className={getTabStyle('/cart')}>Cart</Link>
                    {cartItemCount > 0 &&
                        <div className="floating ui teal label">{cartItemCount}</div>}
                </div>

                {isSignedIn
                    ? <button className="item" onClick={() => dispatch(attemptSignOut())}>Sign Out</button>
                    : null}
            </div>
        </div>
    );
};