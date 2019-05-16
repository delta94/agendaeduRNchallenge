import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import NavigationService from '../../services/NavigationService';

import { Creators as AuthActions, setToken } from '../ducks/auth';

export function* signInRequest(action) {
  try {
    const response = yield call(api.post, '/login', action.payload.credentials);
    yield put(AuthActions.signInSuccess(response.data));
    NavigationService.navigate('Main');
  } catch (err) {
    yield put(AuthActions.signInFailure(err.response.data.message));
  }
}

export function* setUserToken(action) {
  try {
    yield call(setToken, action.payload.token);
    yield put(AuthActions.tokenSetSuccess(action.payload.token));
  } catch (err) {
    yield put(AuthActions.tokenSetFailure(err));
  }
}
