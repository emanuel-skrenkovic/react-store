import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import { initialState } from 'models';
import { authReducer } from 'modules/authentication';

import App from './components/App';

const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const reducers = combineReducers({
    auth: authReducer
});
const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);