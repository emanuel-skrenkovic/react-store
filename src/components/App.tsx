import React from 'react';
import { useSelector } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import { history } from 'models/history';
import { Header, ProtectedRoute } from 'modules/navigation';
import { SignInView, RegisterView, selectAuthInfo } from 'modules/authentication';

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
                    <Route path="/listing" exact />
                    <Route path="/cart" exact />
                    <Route path="/faq" exact />
                    <ProtectedRoute isAuthenticated={isSignedIn} isAllowed={true} path="/admin" exact />
                </Switch>
            </Router>
        </div>
    );
};

export default App;