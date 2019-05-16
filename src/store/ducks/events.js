export const Types = {
  FETCH_REQUEST: 'events/FETCH_REQUEST',
  FETCH_SUCCESS: 'events/FETCH_SUCCESS',
  FETCH_FAILURE: 'events/FETCH_FAILURE',
};

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FETCH_REQUEST:
      return { ...state, loading: true };
    case Types.FETCH_SUCCESS:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
        loading: false,
        error: '',
      };
    case Types.FETCH_FAILURE:
      return { ...state, error: action.payload.message, loading: false };

    default:
      return state;
  }
}

export const Creators = {
  eventFetchRequest: pkct => ({
    type: Types.FETCH_REQUEST,
    payload: pkct,
  }),

  eventFetchSuccess: response => ({
    type: Types.FETCH_SUCCESS,
    payload: response,
  }),

  eventFetchFailure: message => ({
    type: Types.FETCH_FAILURE,
    payload: {
      message,
    },
  }),
};
