import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from 'components/Header';
import { LogInPage } from 'modules/authentication';

const App: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/">
                    <Header />
                </Route>
                <Route path="/home" />
                <Route path="/listing" exact />
                <Route path="/faq" exact />
                <Route path="/cart" exact />
                <Route path="/admin" exact />
                <Route path="/login" exact>
                    <LogInPage />
                </Route>
            </BrowserRouter>
        </div>
    );
};

export default App;