/*
*
* Authentication actions
* make by huyro1212
*/
import * as types from './constants';
import { action } from 'typesafe-actions';

export const changeLogin = (val: boolean) => action(
 types.GET,
 val,
);