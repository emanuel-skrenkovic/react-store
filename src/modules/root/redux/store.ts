import reduxThunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import { authReducer } from 'modules/authentication';
import { shopReducer } from 'modules/shop';
import { cartReducer } from 'modules/cart'
import { readState, saveState } from 'modules/common/providers';
import { logError } from 'middleware';
import { ApplicationState } from 'models'

export const configureStore = (): any => {
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

    return store;
};