import React from 'react';
import { useSelector } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import { history } from 'models/history';
import { Header, ProtectedRoute } from 'modules/navigation';
import { SignInView, RegisterView, selectAuthInfo } from 'modules/authentication';
import { ShopView } from 'modules/shop';
import { CartView } from 'modules/cart';

const App: React.FC = () => {
    const { isSignedIn } = useSelector(selectAuthInfo);

    return (
        <div>
            <Router history={history} >
                <Route path="/" component={Header} />
                <Switch>
                    <Route path="/home" />
                    <Route path="/login" exact component={SignInView} />
                    <Route path="/register" exact component={RegisterView} />
                    <Route path="/listing" exact component={ShopView} />
                    <Route path="/cart" exact component={CartView} />
                    <Route path="/faq" exact />
                    <ProtectedRoute isAuthenticated={isSignedIn} isAllowed={true} path="/admin" exact />
                </Switch>
            </Router>
        </div>
    );
};

export default App;