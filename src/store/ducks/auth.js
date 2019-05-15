import { AsyncStorage } from 'react-native';

export const Types = {
  SIGN_IN_REQUEST: 'auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'auth/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'auth/SIGN_IN_FAILURE',
  TOKEN_SET_SUCCESS: 'auth/TOKEN_SET_SUCCESS',
  TOKEN_GET_SUCCESS: 'auth/TOKEN_GET_SUCCESS',
  TOKEN_SET_FAILURE: 'auth/TOKEN_SET_FAILURE',
  TOKEN_GET_FAILURE: 'auth/TOKEN_GET_FAILURE',
};

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case Types.SIGN_IN_SUCCESS:
      return {
        ...state,
        data: { ...state.data, ...action.payload.token },
        loading: false,
        error: '',
      };
    case Types.SIGN_IN_FAILURE:
      return { ...state, error: action.payload.message, loading: false };
    case Types.TOKEN_GET_SUCCESS:
      return {
        ...state,
        data: { ...state.data, ...action.payload.token },
      };
    case Types.TOKEN_SET_SUCCESS:
      return {
        ...state,
        data: { ...state.data, ...action.payload.token },
      };
    default:
      return state;
  }
}

export const Creators = {
  signInRequest: credentials => ({
    type: Types.SIGN_IN_REQUEST,
    payload: {
      credentials,
    },
  }),

  signInSuccess: token => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: { token },
  }),

  signInFailure: message => ({
    type: Types.SIGN_IN_FAILURE,
    payload: {
      message,
    },
  }),

  tokenSetSuccess: token => ({
    type: Types.TOKEN_SET_SUCCESS,
    payload: {
      token,
    },
  }),

  tokenSetFailure: message => ({
    type: Types.TOKEN_SET_FAILURE,
    payload: {
      message,
    },
  }),

  tokenGetSuccess: token => ({
    type: Types.TOKEN_GET_SUCCESS,
    payload: {
      token,
    },
  }),

  tokenGetFailure: message => ({
    type: Types.TOKEN_GET_FAILURE,
    payload: {
      message,
    },
  }),
};

export const setToken = async (token) => {
  try {
    await AsyncStorage.setItem('@agendaedu:token', JSON.stringify(token));
  } catch (error) {
    console.log('AsyncStorage error during token store:', error);
  }
};
