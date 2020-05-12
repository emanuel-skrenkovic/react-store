import React from 'react';
import { Provider } from 'react-redux';

import { App } from 'modules/root';

export interface RootProps {
    store: any
}

export const Root: React.FC<RootProps> = ({ store }) => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};