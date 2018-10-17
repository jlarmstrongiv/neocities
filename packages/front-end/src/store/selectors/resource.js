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
    const resResourcesDeployed = resResourceOrder.map(resId => {
      return res[resId].deployed;
    });
    const resResourceDeployedTotal = resResourcesDeployed.reduce((totalDeployed, deployed) => {
      return totalDeployed + deployed;
    }, 0);
    const resResource = updateObject(resource, {
      deployed: resResourceDeployedTotal,
      name: resource.resource.name,
      resource: {
        deployed: resResourceDeployedTotal,
        quantity: resource.quantity,
      },
    });
    return resResource;
  }
)(
  (state, resourceId) => resourceId
);
