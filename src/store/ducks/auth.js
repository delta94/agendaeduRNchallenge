export const Types = {
  SIGN_IN_REQUEST: 'auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'auth/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'auth/SIGN_IN_FAILURE',
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
    payload: {
      token,
    },
  }),

  signInFailure: message => ({
    type: Types.SIGN_IN_FAILURE,
    payload: {
      message,
    },
  }),
};
