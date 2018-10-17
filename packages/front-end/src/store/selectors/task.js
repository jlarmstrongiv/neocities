import createCachedSelector from 're-reselect';
import { updateObject, } from 'utilities';

const res = state => state.res.items;
const resOrder = state => state.res.itemsOrder;
const taskId = (state, taskId) => taskId;
const task = (state, taskId) => state.tasks.items[taskId];
const resources = (state) => state.resources.items;
const resourcesOrder = (state) => state.resources.itemsOrder;

export const taskRes = createCachedSelector(
  res,
  resOrder,
  taskId,
  task,
  resources,
  resourcesOrder,
  (res, resOrder, taskId, task, resources, resourcesOrder) => {
    const resTaskOrder = resOrder.filter(resId => {
      return (res[resId].event.id === taskId); //&& (res[resId].quantity > 0);
    });

    const resTaskResourceIds = resTaskOrder.map(resId => {
      return res[resId].resource.id;
    });
    const uniqueResourceIds = [...new Set(resTaskResourceIds),];

    const uniqueResources = uniqueResourceIds.map(uniqueResourceId => {
      const sameResourcesIds = resTaskOrder.filter(resTaskId => {
        return res[resTaskId].resource.id === uniqueResourceId;
      });
      const sameResourcesDeployed = sameResourcesIds.map(sameResourceId => {
        return res[sameResourceId].deployed;
      });
      const sameResourcesDeployedTotal = sameResourcesDeployed.reduce((totalDeployed, deployed) => {
        return totalDeployed + deployed;
      }, 0);
      const resource = resources[uniqueResourceId];
      const resResourceTask = updateObject(resource, {
        deployed: sameResourcesDeployedTotal,
        name: resource.resource.name,
        resource: {
          quantity: resource.quantity,
          deployed: sameResourcesDeployedTotal,
        },
      });
      return resResourceTask;
    });

    let resTaskSuccess = null;
    if (resTaskOrder.length) {
      resTaskSuccess = res[resTaskOrder[0]].success;
    }
    return updateObject(task, {
      resources: uniqueResources,
      success: resTaskSuccess,
    });
  }
)(
  (state, taskId) => taskId
);
