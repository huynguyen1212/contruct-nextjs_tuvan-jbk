/*
*
* Authentication reducers
* make by huyro1212
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsAuthentication, StoreAuthentication } from "./types";

const initState : StoreAuthentication = { };

const reducersAuthentication : Reducer<StoreAuthentication, ActionsAuthentication> = (state = initState, actions: ActionsAuthentication) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersAuthentication;