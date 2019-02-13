import * as types from '../constants/actionType';

var initialState = {
  players: [],
  isLoading: true
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function(state, action) {
  state = state || initialState;

  switch (action.type) {
    case types.RECEIVE_PLAYERS:
      return Object.assign({}, state, {
        players: action.players,
        isLoading: false
      });

    case types.CREATE_PLAYER:
      return Object.assign({}, state, {
        players: [...state.players, { name: action.name, creationIsPending: true }],
        isLoading: false
      });

    default:
      return state;
  }
}
