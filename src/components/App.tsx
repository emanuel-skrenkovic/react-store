import React from 'react';
import { useSelector } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import { SignInView, RegisterView, selectAuthInfo } from 'modules/authentication';
import { CartView, CartSidebar, selectCartVisible } from 'modules/cart';
import { Header, ProtectedRoute } from 'modules/navigation';
import { ErrorView } from 'modules/error';
import { history } from 'models/history';
import { ShopView } from 'modules/shop';

const App: React.FC = () => {
    const { isSignedIn } = useSelector(selectAuthInfo);

    const cartVisible: boolean = useSelector(selectCartVisible);

    // TODO
    const isAllowed = true;

    return (
        <div>
            {cartVisible && <CartSidebar/>}
            <Router history={history}>
                <Route path="/" component={Header} />
                <Switch>
                    <Route path="/home" />
                    <Route path="/login" exact component={SignInView} />
                    <Route path="/register" exact component={RegisterView} />
                    <Route path="/listing" exact component={ShopView} />
                    <Route path="/cart" exact component={CartView} />
                    <Route path="/faq" exact />
                    <Route path="/error" exact component={ErrorView} />
                    <ProtectedRoute
                        allowExpression={isSignedIn && isAllowed}
                        fallbackRoute="/login"
                        path="/admin"
                        exact />
                </Switch>
            </Router>
        </div>
    );
};

export default App;