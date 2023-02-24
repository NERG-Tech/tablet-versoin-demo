import {call, put, takeEvery, Effect, SagaReturnType} from 'redux-saga/effects';
import {ADD_PLYAER, HANDLE_PLYAER_SUCCESS, HANDLE_PLYAER_FAILED} from '../actions/types/player';
import {TAddPlayer} from '../../services/playerService';
import {addPlayer as addPlayerRequest} from '../../services/playerService';
import {
  getMET as getMETRequest,
  addVo2 as addVo2Request,
  addWaistAndHip as addWaistAndHipRequest,
  addKeyMeasurements as addKeyMeasurementsRequest,
} from '../../services/formulaService';
import {navigate} from '../actions/navigationActions';
import * as NavigationConstants from '../../common/constants/NavigationConstants';

type TAddPlayerResponse = SagaReturnType<typeof addPlayerRequest>;

function* addPlayer(action: Effect<string, TAddPlayer>) {
  try {
    const res: TAddPlayerResponse = yield call(addPlayerRequest, action.payload);
    yield put({type: HANDLE_PLYAER_SUCCESS, payload: res.list});
    yield call(
      navigate,
      NavigationConstants.PLAYER_INFO as never,
      {
        playerId: 'new',
        activeTab: NavigationConstants.GENETICS,
      } as never,
    );
  } catch (err) {
    yield put({type: HANDLE_PLYAER_FAILED, payload: err});
    console.log('addPlayer saga error: ', err);
  }
}

export function* playerSagaWatcher() {
  yield takeEvery(ADD_PLYAER, addPlayer);
}
