import { createSelector, } from 'reselect';

const roleId = state => state.auth.roleId;
const briefings = state => state.briefings.items;
const briefingsOrder = state => state.briefings.itemsOrder;

export const briefingsOrderByRole = createSelector(
  roleId,
  briefings,
  briefingsOrder,
  (roleId, briefings, briefingsOrder) => {
    return briefingsOrder.filter(briefingId => briefings[briefingId].role.id === roleId);
  }
);
