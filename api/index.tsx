import axios from '../libraries/axios/index';

export const IP = 'https://api.ipify.org?format=json';

//saga API
export function getMainPageCard(props: any) {
  return axios.get(
    `/breeds?limit=${props.limit}&page=${props.pageSet}&order=${props.value}`
  );
}

export function getMainSearchCard(query: string) {
  console.log('query', query);
  return axios.get(`/images/search?${query}`);
}

//votes API
export function getVotes(query: string) {
  return axios.get(`/votes?sub_id=${query}`);
}

export function deleteVotes(query: string) {
  return axios.delete(`/votes/${query}`);
}

export function sendLikeVotes(body: any) {
  return axios.post('/votes', body);
}

//favourite API
export function getFavourites(query: string) {
  return axios.get(`/favourites?sub_id=${query}`);
}

export function sendFavourites(body: any) {
  return axios.post('/favourites', body);
}

export function deleteFavourites(query: number) {
  return axios.delete(`/favourites/${query}`);
}

//images API
export function getLikedImg(query: string) {
  return axios.get(`/images/${query}`);
}

export function getLikedAllImg(query: string) {
  return axios.get(`/images?${query}`);
}

export function deleteUploadImg(query: string) {
  return axios.delete(`/images/${query}`);
}

export function postImgUpload(data: any, headers: any) {
  console.log(typeof data);
  console.log(typeof headers);
  return axios.post(`/images/upload`, data, headers);
}

//gsr
export const GSR = 'https://api.thedogapi.com/v1/images/';
