import { combineReducers, } from 'redux';
import auth from 'store/reducers/auth/auth';

const rootReducer = combineReducers({ auth, });

export default rootReducer;
