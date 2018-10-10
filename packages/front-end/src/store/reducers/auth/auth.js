import * as actionTypes from 'store/actions/actionTypes';

const initialState = {
  token: '',
  userId: '',
  participantId: '',
  authRedirectPath: '/',
};

const authCreate = (state, action) => {
  const { payload , } = action;
  return {
    ...state,
    token: payload.token,
    userId: payload.userId,
    participantId: payload.participantId,
  };
};

const authDestroy = (state, action) => {
  return {
    ...state,
    token: '',
    userId: '',
    participantId: '',
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
