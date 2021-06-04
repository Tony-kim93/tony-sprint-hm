import axios from '../../../libraries/axios/index';

export function getMainPageCard(query: any) {
  console.log(query.payload.card);
  return axios.get(`breeds?limit=50${query.payload.card}`);
}
