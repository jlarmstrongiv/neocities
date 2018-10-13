import * as actionTypes from 'store/actions/actionTypes';
import { START_TIMER, STOP_TIMER, } from 'redux-timer'; // https://github.com/elselabs/redux-timer

export default ({ dispatch, getState, }) => next => action => {
  switch (action.type) {
    case actionTypes.SIMULATED_TIMER_CREATE:
      dispatch({
        type: actionTypes.SIMULATED_TIMER_SET,
        payload: {
          timeStart: action.payload.timeStart,
          simulatedTimeSpeed: action.payload.simulatedTimeSpeed,
        },
      });
      dispatch({
        type: START_TIMER,
        payload: {
          name: actionTypes.SIMULATED_TIMER_NAME,
          interval: 60000,
          action: () => {
            /* eslint-disable no-case-declarations */
            const { time, } = getState();
            const currentTime = (Date.now() / 1000) | 0;
            const timeOffset = currentTime - time.timeStart;
            const simulatedTime = time.timeStart + timeOffset * time.simulatedTimeSpeed;
            // Remember that JS creates millisecond timestamps
            // https://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript
            // https://www.electrictoolbox.com/unix-timestamp-javascript/
            // https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
            /* eslint-enable no-case-declarations */
            dispatch({
              type: actionTypes.SIMULATED_TIME_SET,
              payload: { simulatedTime, },
            });
          },
        },
      });
      break;
    case actionTypes.SIMULATED_TIMER_DESTROY:
      dispatch({
        type: STOP_TIMER,
        payload: { name: actionTypes.SIMULATED_TIMER_NAME, },
      });
      break;
    default:
      return next(action);
  }
};
