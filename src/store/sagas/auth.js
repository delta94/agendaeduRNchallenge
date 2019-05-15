import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import NavigationService from '../../services/NavigationService';

import { Creators as AuthActions } from '../ducks/auth';

export function* signInRequest(action) {
  try {
    const response = yield call(api.post, '/login', action.payload.credentials);

    yield put(AuthActions.signInSuccess(response.data));
    NavigationService.navigate('Events');
  } catch (err) {
    yield put(AuthActions.signInFailure(err.response.data.message));
  }
}
