import thunk from 'redux-thunk';
import createNeocitiesSocket from 'store/middlewares/createNeocitiesSocket';

const middlewares = [
  thunk,
  createNeocitiesSocket(),
];

export default middlewares;
