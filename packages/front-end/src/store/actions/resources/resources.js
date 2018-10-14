import axios from 'axios/axios';
import * as actionTypes from 'store/actions/actionTypes';
import * as itemActions from 'store/actions/itemsActionsFor/itemsActionsFor';

export const resourcesInit = () => {
  return async (dispatch, getState) => {
    try {
      const { resources, } = getState();
      if (resources.items.length && resources.itemsOrder.length) {
        return;
      }
      const localResources = localStorage.getItem(actionTypes.PREFIXES_RESOURCES);
      if (localResources && localResources.items.length && localResources.itemsOrder.length) {
        return dispatch(resourcesCreate(localResources));
      }
      dispatch(resourcesFetch());
    } catch (error) {
      dispatch(resourcesIsLoading({ isLoading: false, }));
      dispatch(resourcesIsError({ isError: error, }));
    }
  };
};

export const resourcesFetch = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(resourcesIsError({ isError: false, }));
      dispatch(resourcesIsLoading({ isLoading: true, }));

      const { auth, } = getState();
      const { data, } = await axios.get(`/resources/${auth.token}`);
      dispatch(resourcesCreate(data));
      dispatch(resourcesIsLoading({ isLoading: false, }));

      localStorage.setItem(actionTypes.PREFIXES_RESOURCES, data);
    } catch (error) {
      dispatch(resourcesIsLoading({ isLoading: false, }));
      dispatch(resourcesIsError({ isError: error, }));
    }
  };
};

export const resourcesCreate = itemActions.createFor(actionTypes.PREFIXES_RESOURCES);
export const resourcesDestroy = itemActions.destroyFor(actionTypes.PREFIXES_RESOURCES);
export const resourcesAdd = itemActions.addFor(actionTypes.PREFIXES_RESOURCES);
export const resourcesRemove = itemActions.removeFor(actionTypes.PREFIXES_RESOURCES);
export const resourcesIsLoading = itemActions.isLoadingFor(actionTypes.PREFIXES_RESOURCES);
export const resourcesIsError = itemActions.isErrorFor(actionTypes.PREFIXES_RESOURCES);

// const setUsersPagination = setPaginationFor('USERS_');
// const setDomainsPagination = setPaginationFor('DOMAINS_');
