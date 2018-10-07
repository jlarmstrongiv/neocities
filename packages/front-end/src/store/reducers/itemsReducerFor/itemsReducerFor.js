import { updateObject, immutableSplice, } from 'utilities';
import * as actionTypes from 'store/actions/actionTypes';

// https://techblog.appnexus.com/five-tips-for-working-with-redux-in-large-applications-89452af4fdcb#fe11

const itemsCreate = (state, action) => {
  return {
    ...state,
    items: action.payload.items,
    itemsOrder: action.payload.itemsOrder,
  };
};
const itemsDestroy = (state, action) => {
  return {
    ...state,
    items: {},
    itemsOrder: [],
  };
};
const itemsAdd = (state, action) => {
  const itemOrder = immutableSplice(state.itemOrder, action.payload.itemIndex, 0, [action.payload.itemIndex,]);
  return {
    ...state,
    items: {
      ...state.items,
      ...action.payload.items,
    },
    itemOrder: itemOrder,
  };
};
const itemsRemove = (state, action) => {
  const itemIndex = state.itemOrder.findIndex(item => item === action.payload.itemId);
  const itemOrder = immutableSplice(state.itemOrder, itemIndex, 1);
  const { [action.payload.itemId]: removedItem, ...items } = this.state.items;
  return {
    ...state,
    items,
    itemOrder,
  };
};
const itemsIsLoading = (state, action) => {
  return {
    ...state,
    isLoading: action.payload.isLoading,
  };
};
const itemsIsError = (state, action) => {
  return {
    ...state,
    isError: action.payload.isError,
  };
};

// reducer factory
const initialItemsState = {
  items: {},
  itemsOrder: [],
  isLoading: false,
  isError: false,
};
const itemsReducerFor = prefix => {
  const itemsReducer = (state = initialItemsState, action) => {
    switch (`${prefix}_${action.type}`) {
      case `${prefix}_${actionTypes.ITEMS_CREATE}`:
        return itemsCreate(state, action);
      case `${prefix}_${actionTypes.ITEMS_DESTROY}`:
        return itemsDestroy(state, action);
      case `${prefix}_${actionTypes.ITEMS_ADD}`:
        return itemsAdd(state, action);
      case `${prefix}_${actionTypes.ITEMS_REMOVE}`:
        return itemsRemove(state, action);
      case `${prefix}_${actionTypes.ITEMS_IS_LOADING}`:
        return itemsIsLoading(state, action);
      case `${prefix}_${actionTypes.ITEMS_IS_ERROR}`:
        return itemsIsError(state, action);
      default:
        return state;
    }
  };
  return itemsReducer;
};

export default itemsReducerFor;
// example usages

// const initialPaginationState = {
//   startElement: 0,
//   pageSize: 100,
//   count: 0,
// };
// const paginationReducerFor = (prefix) => {
//   const paginationReducer = (state = initialPaginationState, action) => {
//     const { type, payload } = action;
//     switch (type) {
//       case prefix + types.SET_PAGINATION:
//         const {
//           startElement,
//           pageSize,
//           count,
//         } = payload;
//         return Object.assign({}, state, {
//           startElement,
//           pageSize,
//           count,
//         });
//       default:
//         return state;
//     }
//   };
//   return paginationReducer;
// };
// // example usages
// const usersReducer = combineReducers({
//   usersData: usersDataReducer,
//   paginationData: paginationReducerFor('USERS_'),
// });
// const domainsReducer = combineReducers({
//   domainsData: domainsDataReducer,
//   paginationData: paginationReducerFor('DOMAINS_'),
// });
