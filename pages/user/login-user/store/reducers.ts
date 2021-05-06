/*
*
* LoginUser reducers
* make by huyro1212
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsLoginUser, StoreLoginUser } from "./types";

const initState : StoreLoginUser = { };

const reducersLoginUser : Reducer<StoreLoginUser, ActionsLoginUser> = (state = initState, actions: ActionsLoginUser) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersLoginUser;