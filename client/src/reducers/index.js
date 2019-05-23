import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import submitReducer from './submitReducer';
import dashboardReducer from './dashboardReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    submit: submitReducer,
    dashboard: dashboardReducer,
});