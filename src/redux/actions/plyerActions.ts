import {TAddPlayer} from '../../services/playerService';
import {TWaistAndHip, TMet, TVo2, TGenetics, TKeyMeasurement} from '../../services/formulaService';
import {ADD_PLYAER} from './types/player';
import {ADD_MET, ADD_VO2, ADD_WAIST_HIP, ADD_KEY_MEASUREMENTS, ADD_GENETICS} from './types/formula';

export const addPlayer = (data: TAddPlayer) => ({
  type: ADD_PLYAER,
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
