import {ADD_PLYAER, HANDLE_PLYAER_SUCCESS, HANDLE_PLYAER_FAILED} from '../actions/types/player';
import {TPlayerInfo} from '../types/player';
import {TAction} from '../types/action';

type TPlayerState = TPlayerInfo & {
  loading: boolean;
  error: string;
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
    default:
      return state;
  }
};
