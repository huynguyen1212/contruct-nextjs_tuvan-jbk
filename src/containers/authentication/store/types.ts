/*
 *
 * Authentication types
 * make by huyro1212
 */
import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export interface StoreAuthentication {
  bay: string
}

export type ActionsAuthentication = ActionType<typeof actions>
