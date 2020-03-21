import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { authReducer } from 'modules/authentication';
import { shopReducer } from 'modules/shop';
import { cartReducer } from 'modules/cart';
import { saveStateToCookie, readStateFromCookie } from "modules/common";

import App from 'components/App';

const sessionStorage = (store: any) => (next: any) => (action: any) => {
    const state = store.getState();

    if (!state.auth.isSignedIn) {
        saveStateToCookie(state);
    }

    return next(action);
};

const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const reducers = combineReducers({
    auth: authReducer,
    shop: shopReducer,
    cart: cartReducer
});

const initialState = readStateFromCookie();

const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(reduxThunk, sessionStorage)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);