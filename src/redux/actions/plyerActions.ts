import {TAddPlayer, TToken} from '../../services/playerService';
import {TWaistAndHip, TMet, TVo2, TGenetics, TKeyMeasurement} from '../../services/formulaService';
import {ADD_PLYAER, GET_PLYAER, EDIT_PLYAER} from './types/player';
import {
  ADD_MET,
  ADD_VO2,
  ADD_WAIST_HIP,
  ADD_KEY_MEASUREMENTS,
  ADD_GENETICS,
  SET_FIELD,
} from './types/formula';
import {TField} from '../types/action';

export const addPlayer = (data: TAddPlayer) => ({
  type: ADD_PLYAER,
  payload: data,
});

export const getPlayer = (data: TToken) => ({
  type: GET_PLYAER,
  payload: data,
});

export const editPlayer = (data: TAddPlayer) => ({
  type: EDIT_PLYAER,
  payload: data,
});

export const addWaistAndHip = (data: TWaistAndHip) => ({
  type: ADD_WAIST_HIP,
  payload: data,
});

export const addVo2 = (data: TVo2) => ({
  type: ADD_VO2,
  payload: data,
});

export const addMET = (data: TMet) => ({
  type: ADD_MET,
  payload: data,
});

export const addKeyMeasurements = (data: TKeyMeasurement) => ({
  type: ADD_KEY_MEASUREMENTS,
  payload: data,
});

export const addGenetics = (data: TGenetics) => ({
  type: ADD_GENETICS,
  payload: data,
});

export const setFiled = (data: TField) => ({
  type: SET_FIELD,
  payload: data,
});
