import createCachedSelector from 're-reselect';

const res = state => state.res.items;
const resOrder = state => state.res.resOrder;
const resourceId = (state, resourceId) => resourceId;
const resource = (state, resourceId) => state.resources.items[resourceId];

export const resourceRes = createCachedSelector(
  res,
  resOrder,
  resourceId,
  resource,
  (res, resOrder, resourceId, resource) => {
    return resource;
  }
)(
  (state, resourceId) => resourceId
);
