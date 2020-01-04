import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { LogInButton } from 'modules/authentication';

import Header from './Header';

const App: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/">
                    <Header />
                    <LogInButton />
                </Route>
                <Route path="/faq" exact />
                <Route path="/cart" exact />
                <Route path="/admin" exact />
            </BrowserRouter>
        </div>
    );
};

export default App;