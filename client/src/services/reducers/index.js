import { combineReducers } from 'redux';
import userData from './getUser';
import userAuth from './getLogout';

const rootReducer = combineReducers({
    userData, userAuth
});

export default rootReducer;