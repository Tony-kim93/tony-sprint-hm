import axios from '../../../libraries/axios/index';
//절대경로 셋팅

export function getMainPageCard(query: any) {
  return axios.get(`${query}`);
}
