import { Reducer } from 'redux';
import {MainState,ActionTypes} from './types';

export const initState: MainState = {
    web3: null,
    loading: false,
    address: ''
};

export const reducer : Reducer <MainState> = (state = initState, action) => {
    switch(action.type) {
        case ActionTypes.ADD_WEB3: {
            return {...state, web3: action.payload};
        }
        case ActionTypes.ADD_ADDRESS: {
            return {...state, address: action.payload};
        }
        default: {
            return state;
        }
    }
};
