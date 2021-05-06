/*
*
* Introduce reducers
* make by huyro1212
*/
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsIntroduce, StoreIntroduce } from "./types";

const initState : StoreIntroduce = { };

const reducersIntroduce : Reducer<StoreIntroduce, ActionsIntroduce> = (state = initState, actions: ActionsIntroduce) => {
switch (actions.type) {
default:
return { ...state };
}
};

export default reducersIntroduce;