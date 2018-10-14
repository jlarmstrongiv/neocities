import axios from 'axios/axios';
import * as actionTypes from 'store/actions/actionTypes';
import * as itemActions from 'store/actions/itemsActionsFor/itemsActionsFor';

export const chatInit = () => {
  return async (dispatch, getState) => {
    try {
      const { chat, } = getState();
      if (chat.items.length && chat.itemsOrder.length) {
        return;
      }
      const localChat = localStorage.getItem(actionTypes.PREFIXES_CHAT);
      if (localChat && localChat.items.length && localChat.itemsOrder.length) {
        return dispatch(chatCreate(localChat));
      }
      dispatch(chatFetch());
    } catch (error) {
      dispatch(chatIsLoading({ isLoading: false, }));
      dispatch(chatIsError({ isError: error, }));
    }
  };
};

export const chatFetch = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(chatIsError({ isError: false, }));
      dispatch(chatIsLoading({ isLoading: true, }));

      const { auth, } = getState();
      const { data, } = await axios.get(`/messages/${auth.participantId}`);
      dispatch(chatCreate(data));
      dispatch(chatIsLoading({ isLoading: false, }));

      localStorage.setItem(actionTypes.PREFIXES_CHAT, data);
    } catch (error) {
      dispatch(chatIsLoading({ isLoading: false, }));
      dispatch(chatIsError({ isError: error, }));
    }
  };
};

export const chatCreate = itemActions.createFor(actionTypes.PREFIXES_CHAT);
export const chatDestroy = itemActions.destroyFor(actionTypes.PREFIXES_CHAT);
export const chatAdd = itemActions.addFor(actionTypes.PREFIXES_CHAT);
export const chatRemove = itemActions.removeFor(actionTypes.PREFIXES_CHAT);
export const chatIsLoading = itemActions.isLoadingFor(actionTypes.PREFIXES_CHAT);
export const chatIsError = itemActions.isErrorFor(actionTypes.PREFIXES_CHAT);

// const setUsersPagination = setPaginationFor('USERS_');
// const setDomainsPagination = setPaginationFor('DOMAINS_');
