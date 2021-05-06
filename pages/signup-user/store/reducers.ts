/*
*
* SignupUser reducers
* make by huyro1212
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsSignupUser, StoreSignupUser } from "./types";

const initState : StoreSignupUser = { };

const reducersSignupUser : Reducer<StoreSignupUser, ActionsSignupUser> = (state = initState, actions: ActionsSignupUser) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersSignupUser;