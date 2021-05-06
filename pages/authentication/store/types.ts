/*
*
* Authentication types
* make by huyro1212
*/
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface StoreAuthentication {}

export type ActionsAuthentication = ActionType<typeof actions>;