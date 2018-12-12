import { combineReducers } from 'redux';
import user from './user_reducer';
import sound from './sound';

const rootReducer = combineReducers({
  user,
  sound
});

export default rootReducer;
