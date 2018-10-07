import * as actionTypes from 'store/actions/actionTypes';
import { updateObject, } from 'utilities';

const initialState = {
  token: 'n',
  userId: null,
  authRedirectPath: '/',
};

const authCreate = (state, action) => {
  return {
    ...state,
    token: action.payload.token,
    userId: action.payload.userId,
  };
};

const authDestroy = (state, action) => {
  return {
    ...state,
    token: '',
    userId: '',
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
