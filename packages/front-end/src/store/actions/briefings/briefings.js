import * as actionTypes from 'store/actions/actionTypes';
import * as itemActions from 'store/actions/itemsActionsFor/itemsActionsFor';
import axios from 'axios/axios';

export const briefingsInit = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(briefingsIsLoading({ isLoading: true, }));
      const response = axios.get('/briefings');
      dispatch(briefingsCreate({
        items: response.data.items,
        itemsOrder: response.data.itemsOrder,
      }));
      dispatch(briefingsIsLoading({ isLoading: false, }));
    } catch (error) {
      dispatch(briefingsIsError({ isLoading: false, }));
      dispatch(briefingsIsError({ isError: {
        text: 'Sorry, something went wrong',
        error,
      }, }));
    }
  };
};
// const setUsersPagination = setPaginationFor('USERS_');
// const setDomainsPagination = setPaginationFor('DOMAINS_');

export const briefingsCreate = itemActions.createFor(actionTypes.PREFIXES_BRIEFINGS);
export const briefingsDestroy = itemActions.destroyFor(actionTypes.PREFIXES_BRIEFINGS);
export const briefingsAdd = itemActions.addFor(actionTypes.PREFIXES_BRIEFINGS);
export const briefingsRemove = itemActions.removeFor(actionTypes.PREFIXES_BRIEFINGS);
export const briefingsIsLoading = itemActions.isLoadingFor(actionTypes.PREFIXES_BRIEFINGS);
export const briefingsIsError = itemActions.isErrorFor(actionTypes.PREFIXES_BRIEFINGS);

// export const authInit = () => {
//   return async (dispatch, getState) => {
//     try {
//       const token = localStorage.getItem(localStorageTypes.TOKEN);
//       const userId = localStorage.getItem(localStorageTypes.USER_ID);
//       dispatch(authCreate({
//         token,
//         userId,
//       }));
//     } catch (error) {
//       dispatch(authDestroy());
//     }
//   };
// };
