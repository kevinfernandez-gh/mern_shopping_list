import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import customerReducer from './customerReducer';

export default combineReducers({
    item: itemReducer,
    customer: customerReducer
})