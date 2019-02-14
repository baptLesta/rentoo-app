import { put, takeLatest, all } from 'redux-saga/effects';
import api from '../api';
import * as types from '../constants/actionType';

function* savePlayer(action) {
  const user = yield api.createPlayer(action.name)
    .then( (response) => response.data.player);

  yield put({ type: types.RECEIVE_CREATED_USER, user });
}

function* actionWatcher() {
  yield takeLatest(types.CREATE_PLAYER, savePlayer);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
