import axios from 'axios';
import { API_PATH } from '../config/config';

axios.defaults.baseURL = API_PATH;

export default {
  getPlayers: () => axios.get('/player'),
  createPlayer: (name) => axios.post('/player',
    { 'player': { 'name': name } }
  ),
  createGame: (game) => axios.post('/game', game),
  removeGame: (game) => axios.delete('/game', game),
  getLatestGames: () => axios.get('/game'),
  getGamesOf: player => axios.get(`/game?player=${player}`)
};
