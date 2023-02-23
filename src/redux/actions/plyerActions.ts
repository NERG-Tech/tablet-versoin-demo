import {TAddPlayer} from '../../services/playerService';
import {TWaistAndHip, TMet, TVo2, TKeyMeasurement} from '../../services/formulaService';
import {ADD_PLYAER} from './types/player';
import {GET_MET, GET_VO2, GET_WAIST_HIP, GET_KEY_MEASUREMENTS} from './types/formula';

export const addPlayer = (data: TAddPlayer) => ({
  type: ADD_PLYAER,
  payload: data,
});

export const getWaistAndHip = (data: TWaistAndHip) => ({
  type: GET_WAIST_HIP,
  payload: data,
});

export const getVo2 = (data: TVo2) => ({
  type: GET_VO2,
  payload: data,
});

export const getMET = (data: TMet) => ({
  type: GET_MET,
  payload: data,
});

export const getKeyMeasurements = (data: TKeyMeasurement) => ({
  type: GET_KEY_MEASUREMENTS,
  payload: data,
});
