import api from '../api';
import * as types from '../constants/actionType';

const receivePlayers = players => ({
  type: types.RECEIVE_PLAYERS,
  players
});

export const getPlayers = () => dispatch => {
  api.getPlayers()
    .then( (response) => {
      dispatch(receivePlayers(response.data.players));
    });
};
