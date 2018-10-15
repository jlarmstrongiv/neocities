import createCachedSelector from 're-reselect';
// import { createSelector, } from 'reselect';

// const roleIdSelector = state => state.auth.roleId;
// const resourcesItemsSelector = state => state.briefings.items;
// const briefingsItemsOrderSelector = state => state.briefings.itemsOrder;

// export const selectedBriefingsOrderByRole = createSelector(
//   roleIdSelector,
//   resourcesItemsSelector,
//   briefingsItemsOrderSelector,
//   (roleId, briefings, briefingsOrder) => {
//     return briefingsOrder.filter(
//       briefingId => briefings[briefingId].role.id === roleId
//     );
//   }
// );

const resourcesItemsSelector = state => state.briefings.items;
const roleItemSelector = (state, roleId) => state.roles.items[roleId];

const resources = state => state.resources.items;
const resourcesOrder = state => state.resources.itemsOrder;
const role = (state, roleId) => state.roles.items[roleId];

export const resourcesOrderByRole = createCachedSelector(
  resources,
  resourcesOrder,
  role,
  (resources, resourcesOrder, role, roleId) => {
    return resourcesOrder.filter(resourceId => resources[resourceId].role.id === roleId);
  }
)(
  (state, roleId) => roleId // Use arg2 as cacheKey
);
