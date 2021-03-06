import createCachedSelector from 're-reselect';

const resources = state => state.resources.items;
const resourcesOrder = state => state.resources.itemsOrder;
const roleId = (state, roleId) => roleId;
const role = (state, roleId) => state.roles.items[roleId];

export const resourcesOrderByRole = createCachedSelector(
  resources,
  resourcesOrder,
  roleId,
  role,
  (resources, resourcesOrder, roleId, role) => {
    const result = resourcesOrder.filter(resourceId => {
      return resources[resourceId].role.id === roleId;
    });
    return result;
  }
)(
  (state, roleId) => roleId // Use arg2 as cacheKey
);

export const resourcesByRole = createCachedSelector(
  resources,
  resourcesOrder,
  roleId,
  role,
  (resources, resourcesOrder, roleId, role) => {
    const roleResourcesOrder = resourcesOrder.filter(resourceId => {
      return resources[resourceId].role.id === roleId;
    });
    const roleResource = roleResourcesOrder.map(resourceId => {
      return resources[resourceId];
    });
    return roleResource;
  }
)(
  (state, roleId) => roleId // Use arg2 as cacheKey
);
