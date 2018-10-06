import * as actionTypes from 'store/actions/actionTypes';
import { updateObject, } from 'utilities';

const initialState = {
  token: 'n',
  userId: null,
  authRedirectPath: '/',
};

const init = (state, action) => {
  return updateObject(...state, { payload: action.payload, });
};

const login = (state, action) => {
  return updateObject(...state, { payload: action.payload, });
};

const logout = (state, action) => {
  return updateObject(...state, { payload: action.payload, });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_INIT:
      return init(action, state);
    case actionTypes.AUTH_LOGIN:
      return login(action, state);
    case actionTypes.AUTH_LOGOUT:
      return logout(action, state);
    default:
      return state;
  }
};
export default reducer;
