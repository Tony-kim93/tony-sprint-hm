import axios from '../../../libraries/axios/index';
//절대경로 셋팅

export function getMainPageCard(query: any) {
  return axios.get(`/breeds?${query}`);
}

export function getMainSearchCard(query: any) {
  return axios.get(`/images${query}`);
}

export function getVotes(query: any) {
  return axios.get(`/votes?${query}`);
}
