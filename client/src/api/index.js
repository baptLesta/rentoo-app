import axios from 'axios';
import { API_PATH } from '../config/config';

axios.defaults.baseURL = API_PATH;

export default {
  getPlayers: () => axios.get('/player')
  // getDemographicDatas: (categorie) => axios.post('/demographic-data', { 'categorie': categorie })
};
