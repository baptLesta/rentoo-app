import axios from 'axios';
import { API_PATH } from '../config/config';

axios.defaults.baseURL = API_PATH;

export default {
  getPlayers: () => axios.get('/player'),
  createPlayer: (name) => axios.post('/player',
    { 'player': { 'name': name } }
  ),
  createGame: game => axios.post('/game', game),
  deleteGame: game => axios.delete(`game/${game.id}`),
  getLatestGames: () => axios.get('/game'),
  getGamesOfPlayer: playerId => axios.get(`/game/player/${playerId}`)
};
