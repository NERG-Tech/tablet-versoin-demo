import {addPlayer} from '../../services/playerService';
import {getMET, getVo2, getWaistAndHip, getKeyMeasurements} from '../../services/formulaService';
import {ADD_PLYAER} from '../actions/types/player';
import {TPlayerInfo} from '../types/plyaer';
import {TAction} from '../types/action';

const initState: TPlayerInfo = {
  name: '',
  age: 0,
  sex: '',
  sport: '',
  position: '',
  bmi: 0,
  height: {
    cm: 0,
    mt: 0,
    feet: {
      feet: 0,
      inch: 0,
    },
  },
  weight: {
    kg: 0,
    pounds: 0,
  },
  adjustedBodyWeight: {
    kg: 0,
    pounds: 0,
  },
  bloodVolumn: {
    value: 0,
    unit: '',
  },
  bodyWaterWeight: {
    kg: 0,
    pounds: 0,
  },
  idealWeight: {
    kg: 0,
    pounds: 0,
  },
  leanBodyMass: {
    kg: 0,
    pounds: 0,
  },
  rmr: {
    value: 0,
    unit: '',
  },
};

export const PlayerReducer = (state: TPlayerInfo = initState, action: TAction) => {
  switch (action.type) {
    case ADD_PLYAER: {
      console.log('reducer: ', action.payload);
      return {
        ...state,
        ...action.payload,
      };
    }
  }
};
