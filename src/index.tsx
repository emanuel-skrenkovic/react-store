import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { authReducer } from 'modules/authentication';
import { shopReducer } from 'modules/shop';
import { cartReducer } from 'modules/cart';
import { errorReducer } from 'modules/error';
import { handleError, saveStateToCookie, readStateFromCookie } from "modules/common";

import App from 'components/App';

const sessionStorage = (store: any) => (next: any) => (action: any) => {
    const state = store.getState();

    if (!state.auth.isSignedIn) {
        saveStateToCookie(state);
    }

    return next(action);
};

const logError = (store: any) => (next: any) => (action: any) => {
    try {
        next(action);
    } catch (err) {
        handleError(err, next);
    }
};

const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const reducers = combineReducers({
    auth: authReducer,
    shop: shopReducer,
    cart: cartReducer,
    error: errorReducer
});

const initialState = readStateFromCookie();

const middleware = [reduxThunk, sessionStorage, logError];
const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);