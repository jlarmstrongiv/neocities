// import axios from 'axios/axios';
import * as actionTypes from 'store/actions/actionTypes';
import * as itemActions from 'store/actions/itemsActionsFor/itemsActionsFor';

export const rolesInit = () => {
  return async (dispatch, getState) => {
    try {
      const { roles, } = getState();
      if (roles.items.length && roles.itemsOrder.length) {
        return;
      }
      const localRoles = localStorage.getItem(actionTypes.PREFIXES_ROLES);
      if (localRoles && localRoles.items.length && localRoles.itemsOrder.length) {
        return dispatch(rolesCreate(localRoles));
      }
      dispatch(rolesFetch());
    } catch (error) {
      dispatch(rolesIsLoading({ isLoading: false, }));
      dispatch(rolesIsError({ isError: error, }));
    }
  };
};

export const rolesFetch = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(rolesIsError({ isError: false, }));
      dispatch(rolesIsLoading({ isLoading: true, }));

      // const { auth, } = getState();
      // const { data, } = await axios.get(`/roles/${auth.token}`);
      const data = {
        items: {
          1: {
            'icon': 'http://neocities.herokuapp.com/api/role/icons/roles/cycle.jpg',
            'id': 1,
            'name': 'Athenian Counciler',
          },
          2: {
            'icon': 'http://neocities.herokuapp.com/api/role/icons/roles/cycle_0rymsaZ.jpg',
            'id': 2,
            'name': 'City State Governor',
          },
        },
        itemsOrder: [1, 2,],
      };
      dispatch(rolesCreate(data));
      dispatch(rolesIsLoading({ isLoading: false, }));

      localStorage.setItem(actionTypes.PREFIXES_ROLES, data);
    } catch (error) {
      dispatch(rolesIsLoading({ isLoading: false, }));
      dispatch(rolesIsError({ isError: error, }));
    }
  };
};

export const rolesCreate = itemActions.createFor(actionTypes.PREFIXES_ROLES);
export const rolesDestroy = itemActions.destroyFor(actionTypes.PREFIXES_ROLES);
export const rolesAdd = itemActions.addFor(actionTypes.PREFIXES_ROLES);
export const rolesRemove = itemActions.removeFor(actionTypes.PREFIXES_ROLES);
export const rolesIsLoading = itemActions.isLoadingFor(actionTypes.PREFIXES_ROLES);
export const rolesIsError = itemActions.isErrorFor(actionTypes.PREFIXES_ROLES);

// const setUsersPagination = setPaginationFor('USERS_');
// const setDomainsPagination = setPaginationFor('DOMAINS_');
