import * as actionTypes from 'store/actions/actionTypes';
import { updateObject, } from 'utilities';

const initialState = {};

const reduce = (state, action) => {
  return updateObject(...state, {});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REDUCE:
      return reduce(state, action);
    default:
      return state;
  }
};
export default reducer;
