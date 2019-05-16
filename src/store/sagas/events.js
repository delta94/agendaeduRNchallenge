import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as EventActions } from '../ducks/events';

export function* eventFetchRequest(action) {
  console.tron.log('mandando isso');
  try {
    const request = {
      headers: { token: action.payload.token, 'Content-Type': 'application/json' },
      params: action.payload.params,
    };
    console.tron.log(request);

    const response = yield call(api.get, '/events', request);
    yield put(EventActions.eventFetchSuccess(response.data));
  } catch (err) {
    yield put(EventActions.eventFetchFailure(err.response.data.message));
  }
}
