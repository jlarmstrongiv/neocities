import * as actionTypes from 'store/actions/actionTypes';

// https://techblog.appnexus.com/five-tips-for-working-with-redux-in-large-applications-89452af4fdcb#fe11

export const createFor = prefix => {
  const create = payload => {
    return {
      type: `${prefix}_${actionTypes.ITEMS_CREATE}`,
      payload,
    };
  };
  return create;
};

export const destroyFor = prefix => {
  const destroy = payload => {
    return {
      type: `${prefix}_${actionTypes.ITEMS_DESTROY}`,
      payload,
    };
  };
  return destroy;
};

export const addFor = prefix => {
  const add = payload => {
    return {
      type: `${prefix}_${actionTypes.ITEMS_ADD}`,
      payload,
    };
  };
  return add;
};

export const removeFor = prefix => {
  const remove = payload => {
    return {
      type: `${prefix}_${actionTypes.ITEMS_REMOVE}`,
      payload,
    };
  };
  return remove;
};

export const isLoadingFor = prefix => {
  const isLoading = payload => {
    return {
      type: `${prefix}_${actionTypes.ITEMS_IS_LOADING}`,
      payload,
    };
  };
  return isLoading;
};

export const isErrorFor = prefix => {
  const isError = payload => {
    return {
      type: `${prefix}_${actionTypes.ITEMS_IS_ERROR}`,
      payload,
    };
  };
  return isError;
};
// import * as itemAction from 'store/actions/itemActionsFor'

// // action creator factory
// const setPaginationFor = prefix => {
//   const setPagination = response => {
//     const { startElement, pageSize, count, } = response;
//     return {
//       type: prefix + types.SET_PAGINATION,
//       payload: {
//         startElement,
//         pageSize,
//         count,
//       },
//     };
//   };
//   return setPagination;
// };
// // example usages
// const setUsersPagination = setPaginationFor('USERS_');
// const setDomainsPagination = setPaginationFor('DOMAINS_');
