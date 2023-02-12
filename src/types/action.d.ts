import {ActionType} from 'typesafe-actions';
import * as appActions from '../modules/app/actions';

export type AppAction = ActionType<typeof appActions>;

export type RootAction = AppAction;
