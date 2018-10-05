export const updateObject = (oldState, updatedProperties) => {
  let newState = { ...oldState, };
  for (let key in updatedProperties) {
    newState[key] = updatedProperties[key];
    if (typeof updatedProperties[key] === 'object') {
      newState[key] = updateObject(oldState[key], newState[key]);
    }
  }
  return newState;
};
