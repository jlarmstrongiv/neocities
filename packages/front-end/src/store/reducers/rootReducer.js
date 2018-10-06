import { combineReducers, } from 'redux';
import auth from 'store/reducers/auth/auth';
import chat from 'store/reducers/chat/chat';
import resources from 'store/reducers/resources/resources';
import tasks from 'store/reducers/tasks/tasks';
import briefings from 'store/reducers/briefings/briefings';

const rootReducer = combineReducers({
  auth,
  chat,
  resources,
  tasks,
  briefings,
});

export default rootReducer;
