import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import { history } from 'models/history';
import { Modal } from 'modules/common';
import { selectErrorMessage, removeError } from 'modules/error';
import { Header, ProtectedRoute } from 'modules/navigation';
import { SignInView, RegisterView, selectAuthInfo } from 'modules/authentication';
import { ShopView } from 'modules/shop';
import { CartView } from 'modules/cart';

const App: React.FC = () => {
    const { isSignedIn } = useSelector(selectAuthInfo);
    const errorMessage = useSelector(selectErrorMessage);

    const dispatch = useDispatch();

    const onClickErrorModal = () => {
        dispatch(removeError());
    };

    const renderErrorModal = () => {
        return (
            <Modal>
                {errorMessage}
                <button onClick={onClickErrorModal}>Ok</button>
            </Modal>
        );
    };

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
            {errorMessage &&
                renderErrorModal()
            }
        </div>
    );
};

export default App;