import * as actionTypes from 'store/actions/actionTypes';
import { updateObject, } from 'utilities';

const initialState = {
  token: 'n',
  userId: null,
  authRedirectPath: '/',
};

const login = (state, action) => {
  return updateObject(state, {
    token: action.payload.token,
    userId: action.payload.userId,
  });
};

const reset = (state, action) => {
  return updateObject(state, {
    token: '',
    userId: '',
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      return login(state, action);
    case actionTypes.AUTH_RESET:
      return reset(state, action);
    default:
      return state;
  }
};
export default reducer;
