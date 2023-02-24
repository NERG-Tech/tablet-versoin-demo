import {ADD_PLYAER, HANDLE_PLYAER_SUCCESS, HANDLE_PLYAER_FAILED} from '../actions/types/player';
import {
  ADD_KEY_MEASUREMENTS,
  SET_KEY_MEASUREMENTS,
  ADD_GENETICS,
  SET_GENETICS,
  SET_WAIST_HIPS,
} from '../actions/types/formula';
import {TPlayerInfo} from '../types/player';
import {TKeyMeasurementData, TGeneticsData} from '../../services/formulaService';
import {TAction} from '../types/action';

export type TPlayerState = TPlayerInfo &
  TKeyMeasurementData &
  TGeneticsData & {
    loading: boolean;
    error: string;
    waistHipsRatio: number;
  };

const initState: TPlayerState = {
  loading: false,
  error: '',
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
  neckCircumference: 0,
  wingSpan: 0,
  handSize: 0,
  hipsCircumference: 0,
  gluteCircumference: 0,
  waistCircumference: 0,
  waistHipsRatio: 0,
  ethnicity: '',
  complexion: '',
  bloodType: '',
};

export const PlayerReducer = (state: TPlayerInfo = initState, action: TAction) => {
  const {type, payload} = action;
  switch (type) {
    case ADD_PLYAER: {
      return {
        ...state,
        loading: true,
      };
    }
    case HANDLE_PLYAER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: '',
        ...payload,
      };
    }
    case HANDLE_PLYAER_FAILED: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    case ADD_KEY_MEASUREMENTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_KEY_MEASUREMENTS: {
      return {
        ...state,
        loading: false,
        ...payload,
      };
    }
    case ADD_GENETICS: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_GENETICS: {
      return {
        ...state,
        loading: false,
        ...payload,
      };
    }
    case SET_WAIST_HIPS: {
      return {
        ...state,
        loading: false,
        waistCircumference: payload.waist,
        hipsCircumference: payload.hip,
        waistHipsRatio: payload.ratio,
      };
    }
    default:
      return state;
  }
};
