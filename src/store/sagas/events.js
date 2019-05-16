import {
  call, put, select, take,
} from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as EventActions } from '../ducks/events';
import { Creators as AuthActions } from '../ducks/auth';

export function* eventFetchRequest(action) {
  try {
    let token = yield select(state => state.auth.data.token);
    if (!token) {
      yield take(AuthActions.tokenGetSuccess);
      token = yield select(state => state.auth.data.token);
    }

    const request = {
      headers: { token, 'Content-Type': 'application/json' },
      params: action.payload.params,
    };
    // console.tron.log(request);

    const response = yield call(api.get, '/events', request);
    yield put(EventActions.eventFetchSuccess(response.data));
  } catch (err) {
    yield put(EventActions.eventFetchFailure(err.response.data.message));
  }
}
