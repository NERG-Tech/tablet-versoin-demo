import {call, put, takeEvery, Effect, SagaReturnType} from 'redux-saga/effects';
import {
  ADD_PLYAER,
  GET_PLYAER,
  EDIT_PLYAER,
  HANDLE_PLYAER_SUCCESS,
  HANDLE_PLYAER_FAILED,
} from '../actions/types/player';
import {
  ADD_KEY_MEASUREMENTS,
  SET_KEY_MEASUREMENTS,
  ADD_GENETICS,
  SET_GENETICS,
  SET_WAIST_HIPS,
} from '../actions/types/formula';
import {TAddPlayer, TToken} from '../../services/playerService';
import {TKeyMeasurement, TGenetics, TGeneticsData} from '../../services/formulaService';
import {TWaistAndHip} from '../../services/formulaService';
import {
  addPlayer as addPlayerRequest,
  getPlayer as getPlayerRequest,
  updatePlayer as updatePlayerRequest,
} from '../../services/playerService';
import {
  getMET as getMETRequest,
  getVo2 as getVo2Request,
  addGenetics as addGeneticsRequest,
  addWaistAndHip as addWaistAndHipRequest,
  addKeyMeasurements as addKeyMeasurementsRequest,
} from '../../services/formulaService';
import {navigate} from '../actions/navigationActions';
import * as NavigationConstants from '../../common/constants/NavigationConstants';

type TAddPlayerResponse = SagaReturnType<typeof addPlayerRequest>;
type TGetPlayerResponse = SagaReturnType<typeof getPlayerRequest>;
type TUpdatePlayerResponse = SagaReturnType<typeof updatePlayerRequest>;
type TAddKeyMeasurementsResponse = SagaReturnType<typeof addKeyMeasurementsRequest>;
type TAddWaistAndHipResponse = SagaReturnType<typeof addWaistAndHipRequest>;
type TAddGeneticsResponse = SagaReturnType<typeof addGeneticsRequest>;

function* addPlayer(action: Effect<string, TAddPlayer>) {
  try {
    const res: TAddPlayerResponse = yield call(addPlayerRequest, action.payload);
    yield put({type: HANDLE_PLYAER_SUCCESS, payload: {...res.list, playerId: res.playerId}});
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

function* getPlayer(action: Effect<string, TToken>) {
  try {
    const res: TGetPlayerResponse = yield call(getPlayerRequest, action.payload);
    yield put({
      type: HANDLE_PLYAER_SUCCESS,
      payload: {...res.player, playerId: res.playerId},
    });
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
    console.log('getPlayer saga error: ', err);
  }
}

function* updatePlayer(action: Effect<string, TAddPlayer>) {
  try {
    const res: TUpdatePlayerResponse = yield call(updatePlayerRequest, action.payload);
    yield put({type: HANDLE_PLYAER_SUCCESS, payload: {...res.list, playerId: res.playerId}});
  } catch (err) {
    yield put({type: HANDLE_PLYAER_FAILED, payload: err});
    console.log('updatePlayer saga error: ', err);
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

    const waistHipsRes: TAddWaistAndHipResponse = yield call(addWaistAndHipRequest, requestData);
    yield put({type: SET_WAIST_HIPS, payload: waistHipsRes.ratio});
  } catch (err) {
    console.log('addKeyMeasurements saga error: ', err);
  }
}

function* addGenetics(action: Effect<string, TGenetics>) {
  try {
    const res: TAddGeneticsResponse = yield call(addGeneticsRequest, action.payload);

    yield put({type: SET_GENETICS, payload: res.list.geneticHealth});
  } catch (err) {
    console.log('addGenetics saga error: ', err);
  }
}

export function* playerSagaWatcher() {
  yield takeEvery(ADD_PLYAER, addPlayer);
  yield takeEvery(GET_PLYAER, getPlayer);
  yield takeEvery(EDIT_PLYAER, updatePlayer);
  yield takeEvery(ADD_KEY_MEASUREMENTS, addKeyMeasurements);
  yield takeEvery(ADD_GENETICS, addGenetics);
}
