/*
*
* SignupPro reducers
* make by huyro1212
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsSignupPro, StoreSignupPro } from "./types";

const initState : StoreSignupPro = { };

const reducersSignupPro : Reducer<StoreSignupPro, ActionsSignupPro> = (state = initState, actions: ActionsSignupPro) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersSignupPro;