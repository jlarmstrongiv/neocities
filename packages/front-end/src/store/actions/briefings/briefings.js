import axios from 'axios/axios';
import * as actionTypes from 'store/actions/actionTypes';
import * as itemActions from 'store/actions/itemsActionsFor/itemsActionsFor';

export const briefingsInit = () => {
  return async (dispatch, getState) => {
    try {
      const { briefings, } = getState();
      if (briefings.items.length && briefings.itemsOrder.length) {
        return;
      }
      const localBriefings = localStorage.getItem(actionTypes.LS_BRIEFINGS);
      if (localBriefings && localBriefings.items.length && localBriefings.itemsOrder.length) {
        return dispatch(briefingsCreate(localBriefings));
      }
      dispatch(briefingsFetch());
    } catch (error) {
      dispatch(briefingsIsError({ isLoading: false, }));
      dispatch(briefingsIsError({ isError: error, }));
    }
  };
};

export const briefingsFetch = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(briefingsIsError({ isError: false, }));
      dispatch(briefingsIsLoading({ isLoading: true, }));

      const { auth, } = getState();
      const { data, } = await axios.get(`/briefings/${auth.token}`);
      dispatch(briefingsCreate(data));
      dispatch(briefingsIsLoading({ isLoading: false, }));

      localStorage.setItem(actionTypes.LS_BRIEFINGS, data);
    } catch (error) {
      dispatch(briefingsIsLoading({ isLoading: false, }));
      dispatch(briefingsIsError({ isError: error, }));
    }
  };
};

export const briefingsCreate = itemActions.createFor(actionTypes.PREFIXES_BRIEFINGS);
export const briefingsDestroy = itemActions.destroyFor(actionTypes.PREFIXES_BRIEFINGS);
export const briefingsAdd = itemActions.addFor(actionTypes.PREFIXES_BRIEFINGS);
export const briefingsRemove = itemActions.removeFor(actionTypes.PREFIXES_BRIEFINGS);
export const briefingsIsLoading = itemActions.isLoadingFor(actionTypes.PREFIXES_BRIEFINGS);
export const briefingsIsError = itemActions.isErrorFor(actionTypes.PREFIXES_BRIEFINGS);

// const setUsersPagination = setPaginationFor('USERS_');
// const setDomainsPagination = setPaginationFor('DOMAINS_');
