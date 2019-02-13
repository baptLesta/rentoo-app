import { put, takeLatest, all } from 'redux-saga/effects';
import api from '../api';
import * as types from '../constants/actionType';

function* fetchDemographicData(action) {

  const [demographicData, undisplayNumber] = yield api.getDemographicDatas(action.categorie)
    .then( (response) => [response.data.datas, response.data.othersValueLength]);

  yield put({ type: types.RECEIVE_DEMOGRAPHIC_DATA, demographicData, undisplayNumber });
}

function* actionWatcher() {
  yield takeLatest('SET_SELECTED_CATEGORIE', fetchDemographicData);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
