import axios from '../../../libraries/axios/index';

export function getMainPageCard() {
  return axios.get(`breeds?limit=50`);
}
