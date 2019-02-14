import { combineReducers } from 'redux';

// Import custom components
import playerReducer from './playerReducer';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
  player: playerReducer,
  game: gameReducer
});

export default rootReducer;
