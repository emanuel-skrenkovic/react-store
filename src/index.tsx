import React from 'react';
import throttle from 'lodash/throttle';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import { logError } from 'middleware';
import { ApplicationState } from 'models';
import { shopReducer } from 'modules/shop';
import { cartReducer } from 'modules/cart';
import { authReducer } from 'modules/authentication';
import { saveState, readState } from "modules/common";

import App from 'components/App';

const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const reducers = combineReducers({
    auth: authReducer,
    shop: shopReducer,
    cart: cartReducer
});

const initialState = readState();

const middleware = [reduxThunk, logError];
const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware)));

store.subscribe(throttle(() => {
    saveState(store.getState() as ApplicationState);
}, 1000));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);