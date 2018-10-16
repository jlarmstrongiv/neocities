import createCachedSelector from 're-reselect';

const res = state => state.res.items;
const resOrder = state => state.res.resOrder;
const taskId = (state, taskId) => taskId;
const task = (state, taskId) => state.tasks.items[taskId];

export const taskRes = createCachedSelector(
  res,
  resOrder,
  taskId,
  task,
  (res, resOrder, taskId, task) => {
    return task;
  }
)(
  (state, taskId) => taskId
);
