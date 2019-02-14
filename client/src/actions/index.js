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

const receiveGames = games => ({
  type: types.RECEIVE_GAMES,
  games
});

export const getLatestGames = () => dispatch => {
  api.getLatestGames()
    .then( (response) => {
      dispatch(receiveGames(response.data.games));
    });
};

export const getGamesOfPlayer = playerId => dispatch => {
  api.getGamesOfPlayer(playerId)
    .then( (response) => {
      dispatch(receiveGames(response.data.games));
    });
};

const createPlayer = name => ({
  type: types.CREATE_PLAYER,
  name
});

export const boundCreatePlayer = name => dispatch => {
  dispatch(createPlayer(name));
}

const createGame = game => ({
  type: types.CREATE_GAME,
  game
});

export const boundCreateGame = game => dispatch => {
  api.createGame(game)
    .then( (response) => {
      dispatch(createGame(response.data.game));
    });
};

const deleteGame = game => ({
  type: types.DELETE_GAME,
  game
});

export const boundDeleteGame = game => dispatch => {
  api.deleteGame(game)
    .then( (response) => {
      dispatch(deleteGame(game));
    });
};


