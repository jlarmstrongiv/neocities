import axios from 'axios/axios';
import * as actionTypes from 'store/actions/actionTypes';
import * as itemActions from 'store/actions/itemsActionsFor/itemsActionsFor';

export const tasksInit = () => {
  return async (dispatch, getState) => {
    try {
      const { tasks, } = getState();
      if (tasks.items.length && tasks.itemsOrder.length) {
        return;
      }
      const localTasks = localStorage.getItem(actionTypes.PREFIXES_TASKS);
      if (localTasks && localTasks.items.length && localTasks.itemsOrder.length) {
        return dispatch(tasksCreate(localTasks));
      }
      dispatch(tasksFetch());
    } catch (error) {
      dispatch(tasksIsLoading({ isLoading: false, }));
      dispatch(tasksIsError({ isError: error, }));
    }
  };
};

export const tasksFetch = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(tasksIsError({ isError: false, }));
      dispatch(tasksIsLoading({ isLoading: true, }));

      const { auth, } = getState();
      const { data, } = await axios.get(`/events/${auth.token}`);
      dispatch(tasksCreate(data));
      dispatch(tasksIsLoading({ isLoading: false, }));

      localStorage.setItem(actionTypes.PREFIXES_TASKS, data);
    } catch (error) {
      dispatch(tasksIsLoading({ isLoading: false, }));
      dispatch(tasksIsError({ isError: error, }));
    }
  };
};

export const tasksCreate = itemActions.createFor(actionTypes.PREFIXES_TASKS);
export const tasksDestroy = itemActions.destroyFor(actionTypes.PREFIXES_TASKS);
export const tasksAdd = itemActions.addFor(actionTypes.PREFIXES_TASKS);
export const tasksRemove = itemActions.removeFor(actionTypes.PREFIXES_TASKS);
export const tasksIsLoading = itemActions.isLoadingFor(actionTypes.PREFIXES_TASKS);
export const tasksIsError = itemActions.isErrorFor(actionTypes.PREFIXES_TASKS);

// const setUsersPagination = setPaginationFor('USERS_');
// const setDomainsPagination = setPaginationFor('DOMAINS_');
