import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore, Root } from 'modules/root';

const store = configureStore();

ReactDOM.render(
    <Root store={store} />,
    document.querySelector('#root')
);