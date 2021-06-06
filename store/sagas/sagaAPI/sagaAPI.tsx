import axios from '../../../libraries/axios/index';

export function getMainPageCard(query: any) {
  return axios.get(`breeds?${query}`);
}
