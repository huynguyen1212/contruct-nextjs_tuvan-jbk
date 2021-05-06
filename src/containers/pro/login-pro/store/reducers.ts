/*
*
* LoginPro reducers
* make by huyro1212
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsLoginPro, StoreLoginPro } from "./types";

const initState : StoreLoginPro = { };

const reducersLoginPro : Reducer<StoreLoginPro, ActionsLoginPro> = (state = initState, actions: ActionsLoginPro) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersLoginPro;