import {call, put, takeEvery, Effect, SagaReturnType} from 'redux-saga/effects';
import {ADD_PLYAER, HANDLE_PLYAER_SUCCESS, HANDLE_PLYAER_FAILED} from '../actions/types/player';
import {ADD_KEY_MEASUREMENTS, SET_KEY_MEASUREMENTS, SET_WAIST_HIPS} from '../actions/types/formula';
import {TAddPlayer} from '../../services/playerService';
import {TKeyMeasurement} from '../../services/formulaService';
import {addPlayer as addPlayerRequest} from '../../services/playerService';
import {
  getMET as getMETRequest,
  addVo2 as addVo2Request,
  addWaistAndHip as addWaistAndHipRequest,
  addKeyMeasurements as addKeyMeasurementsRequest,
} from '../../services/formulaService';
import {navigate} from '../actions/navigationActions';
import * as NavigationConstants from '../../common/constants/NavigationConstants';
import {TWaistAndHip} from '../../services/formulaService';

type TAddPlayerResponse = SagaReturnType<typeof addPlayerRequest>;
type TAddKeyMeasurementsResponse = SagaReturnType<typeof addKeyMeasurementsRequest>;
type TAddWaistAndHipResponse = SagaReturnType<typeof addWaistAndHipRequest>;

function* addPlayer(action: Effect<string, TAddPlayer>) {
  try {
    const res: TAddPlayerResponse = yield call(addPlayerRequest, action.payload);
    yield put({type: HANDLE_PLYAER_SUCCESS, payload: res.list});
    yield call(
      navigate,
      NavigationConstants.PLAYER_INFO as never,
      {
        playerId: res.playerId,
        activeTab: NavigationConstants.GENETICS,
      } as never,
    );
  } catch (err) {
    yield put({type: HANDLE_PLYAER_FAILED, payload: err});
    console.log('addPlayer saga error: ', err);
  }
}

function* addKeyMeasurements(action: Effect<string, TKeyMeasurement>) {
  try {
    const measurementRes: TAddKeyMeasurementsResponse = yield call(
      addKeyMeasurementsRequest,
      action.payload,
    );
    yield put({type: SET_KEY_MEASUREMENTS, payload: measurementRes.measure.keyMeasurements});

    const requestData: TWaistAndHip = {
      waist: action.payload.waistCircumference,
      hip: action.payload.hipsCircumference,
      idToken: action.payload.idToken,
    };

    console.log('saga: ', requestData);
    const waistHipsRes: TAddWaistAndHipResponse = yield call(addWaistAndHipRequest, requestData);
    yield put({type: SET_WAIST_HIPS, payload: waistHipsRes.ratio});
  } catch (err) {
    console.log('addKeyMeasurements saga error: ', err);
  }
}

export function* playerSagaWatcher() {
  yield takeEvery(ADD_PLYAER, addPlayer);
  yield takeEvery(ADD_KEY_MEASUREMENTS, addKeyMeasurements);
}
