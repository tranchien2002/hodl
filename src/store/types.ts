import Web3 from 'web3';
export interface MainState {
    web3: Web3 | null;
    loading: boolean;
    address: string;
}

export enum ActionTypes {
    ADD_WEB3 = 'ADD_WEB3',
    ADD_ADDRESS = 'ADD_ADDRESS'
}