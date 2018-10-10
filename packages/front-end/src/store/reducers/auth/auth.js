import * as actionTypes from 'store/actions/actionTypes';

const initialState = {
  token: '',
  userId: '',
  participantId: '',
  timeStart: '',
  simulatedTimeSpeed: '',
  authRedirectPath: '/',
};

const authCreate = (state, action) => {
  const { payload , } = action;
  return {
    ...state,
    token: payload.token,
    userId: payload.userId,
    participantId: payload.participantId,
    timeStart: payload.timeStart,
    simulatedTimeSpeed: payload.simulatedTimeSpeed,
  };
};

const authDestroy = (state, action) => {
  return {
    ...state,
    token: '',
    userId: '',
    participantId: '',
    timeStart: '',
    simulatedTimeSpeed: '',
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_CREATE:
      return authCreate(state, action);
    case actionTypes.AUTH_DESTROY:
      return authDestroy(state, action);
    default:
      return state;
  }
};
export default reducer;
