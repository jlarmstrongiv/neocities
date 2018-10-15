import { combineReducers, } from 'redux';
import auth from 'store/reducers/auth/auth';
import time from 'store/reducers/time/time';
import chat from 'store/reducers/chat/chat';
import resources from 'store/reducers/resources/resources';
import tasks from 'store/reducers/tasks/tasks';
import briefings from 'store/reducers/briefings/briefings';
import roles from 'store/reducers/roles/roles';
import res from 'store/reducers/res/res';

const rootReducer = combineReducers({
  auth,
  time,
  chat,
  resources,
  tasks,
  briefings,
  roles,
  res,
});

export default rootReducer;
