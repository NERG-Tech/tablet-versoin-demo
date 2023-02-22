import {call, put, takeEvery, fork} from 'redux-saga/effects';
import {ADD_PLYAER} from '../actions/types/player';
import {TAddPlayer} from '../../services/playerService';
import {addPlayer as addPlayerRequest} from '../../services/playerService';
import {
  getMET as getMETRequest,
  getVo2 as getVo2Request,
  getWaistAndHip as getWaistAndHipRequest,
  getKeyMeasurements as getKeyMeasurementsRequest,
} from '../../services/formulaService';

type TAddPlayerData = {
  data: TAddPlayer;
  type: string;
};

function* addPlayer(params: TAddPlayerData) {
  try {
    const res = yield call(addPlayerRequest, params.data);
    console.log('saga: ', res);
  } catch (err) {
    console.log('saga error: ', err);
  }
}

export function* playerSagaWatcher() {
  yield takeEvery(ADD_PLYAER, addPlayer);
}
