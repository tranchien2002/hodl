import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import createSagaMiddleware from "redux-saga";

import thunk from 'redux-thunk';
import {reducer} from './reducer';

export default function configureStore(): Store {
    const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
    return store;
}