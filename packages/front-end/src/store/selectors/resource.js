import createCachedSelector from 're-reselect';
import { updateObject, } from 'utilities';

const res = state => state.res.items;
const resOrder = state => state.res.itemsOrder;
const resourceId = (state, resourceId) => resourceId;
const resource = (state, resourceId) => state.resources.items[resourceId];

export const resourceRes = createCachedSelector(
  res,
  resOrder,
  resourceId,
  resource,
  (res, resOrder, resourceId, resource) => {
    const resResourceOrder = resOrder.filter(resId => {
      return res[resId].resource.id === resourceId;
    });
    const resResources = resResourceOrder.map(resId => {
      return res[resId].deployed;
    });
    // you cannot reduce on an empty array
    let resResourceDeployed = 0;
    if (resResources.length) {
      resResourceDeployed = resResources.reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue;
        }
      );
    }
    const resResource = updateObject(resource, {
      deployed: resResourceDeployed,
      resource: {
        deployed: resResourceDeployed,
        quantity: resource.quantity,
      },
    });
    return resResource;
  }
)(
  (state, resourceId) => resourceId
);
