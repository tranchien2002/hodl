import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import createSagaMiddleware from "redux-saga";

import thunk from 'redux-thunk';
import {reducer} from './reducer';
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
// export default function configureStore(): Store {

//     return store;
// }