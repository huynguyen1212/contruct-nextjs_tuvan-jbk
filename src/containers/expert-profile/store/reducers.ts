/*
*
* ExpertProfile reducers
* make by huyro1212
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsExpertProfile, StoreExpertProfile } from "./types";

const initState : StoreExpertProfile = { };

const reducersExpertProfile : Reducer<StoreExpertProfile, ActionsExpertProfile> = (state = initState, actions: ActionsExpertProfile) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersExpertProfile;