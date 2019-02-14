import * as types from '../constants/actionType';

var initialState = {
  games: [],
  isLoading: true
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function(state, action) {
  state = state || initialState;

  switch (action.type) {
    case types.CREATE_GAME:
      return Object.assign({}, state, {
        games: [...state.games, action.game]
      });

    case types.RECEIVE_GAMES:
      return Object.assign({}, state, {
        games: action.games
      });

    default:
      return state;
  }
}
