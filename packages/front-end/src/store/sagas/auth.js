import { call, put, } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from 'store/actions/actionTypes';
import * as localStorageTypes from 'store/actions/localStorageTypes';

export function* login (action) {
  yield call([localStorage, 'setItem',], localStorageTypes.TOKEN);
}
