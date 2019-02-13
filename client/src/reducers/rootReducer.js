import { combineReducers } from 'redux';

// Import custom components
import playerReducer from './playerReducer';

const rootReducer = combineReducers({
  player: playerReducer,
});

export default rootReducer;
