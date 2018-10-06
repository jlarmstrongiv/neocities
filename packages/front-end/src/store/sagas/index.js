import { takeEvery, all, takeLatest, } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import * as auth from 'store/sagas/auth';

export function* watchAuth () {
  yield all([
    takeEvery(actionTypes.AUTH_LOGOUT),
    takeEvery(actionTypes.AUTH_LOGIN, auth.login),
  ]);
}
