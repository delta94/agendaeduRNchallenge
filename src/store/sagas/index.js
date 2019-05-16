import { all, takeLatest } from 'redux-saga/effects';
import { Types as AuthTypes } from '../ducks/auth';
import { Types as EventTypes } from '../ducks/events';

import { signInRequest, setUserToken } from './auth';
import { eventFetchRequest } from './events';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signInRequest),
    takeLatest(AuthTypes.SIGN_IN_SUCCESS, setUserToken),
    takeLatest(AuthTypes.TOKEN_GET_SUCCESS, setUserToken),
    takeLatest(EventTypes.FETCH_REQUEST, eventFetchRequest),
  ]);
}
