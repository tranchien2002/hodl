import { MainState, ActionTypes } from './types';
import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

export type AppThunk = ThunkAction<
  void,
  MainState,
  null,
  Action<string>
>;

export const addWeb3: ActionCreator<AppThunk> = (web3) => {
    return (dispatch: Dispatch):Action => dispatch({
        type: ActionTypes.ADD_WEB3,
        payload: web3
    });
};

export const addAddress: ActionCreator<AppThunk> = (address) => {
    return (dispatch: Dispatch):Action => dispatch({
        type: ActionTypes.ADD_ADDRESS,
        payload: address
    });
};


