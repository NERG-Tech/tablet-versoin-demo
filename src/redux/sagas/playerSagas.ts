import {call, put, takeEvery, fork, Effect, SagaReturnType} from 'redux-saga/effects';
import {ADD_PLYAER} from '../actions/types/player';
import {TAddPlayer} from '../../services/playerService';
import {addPlayer as addPlayerRequest} from '../../services/playerService';
import {
  getMET as getMETRequest,
  getVo2 as getVo2Request,
  getWaistAndHip as getWaistAndHipRequest,
  getKeyMeasurements as getKeyMeasurementsRequest,
} from '../../services/formulaService';

type TAddPlayerResponse = SagaReturnType<typeof addPlayerRequest>;

function* addPlayer(action: Effect<string, TAddPlayer>) {
  try {
    console.log('params: ', action.payload);
    const res: TAddPlayerResponse = yield call(addPlayerRequest, action.payload);
    console.log('saga: ', res);
  } catch (err) {
    console.log('saga error: ', err);
  }
}

export function* playerSagaWatcher() {
  yield takeEvery(ADD_PLYAER, addPlayer);
}
