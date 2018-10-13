import reduceReducers from 'reduce-reducers';
import itemsReducerFor, { initialItemsState, } from 'store/reducers/itemsReducerFor/itemsReducerFor';
import * as actionTypes from 'store/actions/actionTypes';

const initialState = { ...initialItemsState, };

const reduce = (state, action) => {
  return {};
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REDUCE:
      return reduce(state, action);
    default:
      return state;
  }
};

export default reduceReducers(
  reducer,
  itemsReducerFor(actionTypes.PREFIXES_CHAT)
);
