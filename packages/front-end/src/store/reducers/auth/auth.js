import * as actionTypes from 'store/actions/actionTypes';

const initialState = {
  token: '',
  userId: '',
  participantId: '',
  roleId: '',
  isLoading: '',
  isError: '',
  chatSession: '',
  sessionId: '',
  authRedirectPath: '/',
};

const authCreate = (state, action) => {
  const { payload , } = action;
  return {
    ...state,
    token: payload.token,
    userId: payload.userId,
    participantId: payload.participantId,
    roleId: payload.roleId,
    chatSession: payload.chatSession,
    sessionId: payload.sessionId,
  };
};

const authDestroy = (state, action) => {
  return {
    ...state,
    token: '',
    userId: '',
    participantId: '',
    roleId: '',
    chatSession: '',
    sessionId: '',
  };
};

const authIsLoading = (state, action) => {
  return {
    ...state,
    isLoading: action.payload.isLoading,
  };
};

const authIsError = (state, action) => {
  return {
    ...state,
    isError: action.payload.isError,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_CREATE:
      return authCreate(state, action);
    case actionTypes.AUTH_DESTROY:
      return authDestroy(state, action);
    case actionTypes.AUTH_IS_LOADING:
      return authIsLoading(state, action);
    case actionTypes.AUTH_IS_ERROR:
      return authIsError(state, action);
    default:
      return state;
  }
};
export default reducer;
