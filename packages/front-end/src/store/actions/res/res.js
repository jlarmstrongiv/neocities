// import axios from 'axios/axios';
import data from 'store/actions/res/res-api';
import * as actionTypes from 'store/actions/actionTypes';
import * as itemActions from 'store/actions/itemsActionsFor/itemsActionsFor';

export const resInit = () => {
  return async (dispatch, getState) => {
    try {
      const { res, } = getState();
      if (res.items.length && res.itemsOrder.length) {
        return;
      }
      const localRes = localStorage.getItem(actionTypes.PREFIXES_RES);
      if (localRes && localRes.items.length && localRes.itemsOrder.length) {
        return dispatch(resCreate(localRes));
      }
      dispatch(resFetch());
    } catch (error) {
      dispatch(resIsLoading({ isLoading: false, }));
      dispatch(resIsError({ isError: error, }));
    }
  };
};

export const resFetch = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(resIsError({ isError: false, }));
      dispatch(resIsLoading({ isLoading: true, }));

      // const { auth, } = getState();
      // const { data, } = await axios.get(`/resourceeventstate/${auth.token}`);
      dispatch(resCreate(data));

      dispatch(resIsLoading({ isLoading: false, }));

      localStorage.setItem(actionTypes.PREFIXES_RES, data);
    } catch (error) {
      dispatch(resIsLoading({ isLoading: false, }));
      dispatch(resIsError({ isError: error, }));
    }
  };
};

export const resCreate = itemActions.createFor(actionTypes.PREFIXES_RES);
export const resDestroy = itemActions.destroyFor(actionTypes.PREFIXES_RES);
export const resAdd = itemActions.addFor(actionTypes.PREFIXES_RES);
export const resRemove = itemActions.removeFor(actionTypes.PREFIXES_RES);
export const resIsLoading = itemActions.isLoadingFor(actionTypes.PREFIXES_RES);
export const resIsError = itemActions.isErrorFor(actionTypes.PREFIXES_RES);
