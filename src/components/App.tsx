import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

const App: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/">
                    <Header />
                </Route>
            </BrowserRouter>
        </div>
    );
};

export default App;