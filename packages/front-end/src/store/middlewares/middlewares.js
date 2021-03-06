import thunk from 'redux-thunk';
import timerMiddleware from 'redux-timer';
import createNeocitiesSocket from 'store/middlewares/createNeocitiesSocket';
import simulatedTime from 'store/middlewares/simulatedTime';

const middlewares = [
  thunk,
  timerMiddleware,
  createNeocitiesSocket(),
  simulatedTime,
];

export default middlewares;
