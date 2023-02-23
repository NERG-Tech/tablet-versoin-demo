import {fork, all} from 'redux-saga/effects';
import {playerSagaWatcher} from './playerSagas';

function* rootSaga() {
  yield all([fork(playerSagaWatcher)]);
}

export default rootSaga;
