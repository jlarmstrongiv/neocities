import * as actionTypes from 'store/actions/actionTypes';

const initialState = {
  timeStart: '',
  simulatedTime: '',
  simulatedTimeSpeed: '',
};

const simulatedTimeSet = (state, action) => {
  return {
    ...state,
    simulatedTime: action.payload.simulatedTime,
  };
};

const simulatedTimerSet = (state, action) => {
  const { payload, } = action;
  return {
    ...state,
    timeStart: payload.timeStart,
    simulatedTimeSpeed: payload.simulatedTimeSpeed,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIMULATED_TIME_SET:
      return simulatedTimeSet(state, action);
    case actionTypes.SIMULATED_TIMER_SET:
      return simulatedTimerSet(state, action);
    default:
      return state;
  }
};

export default reducer;
