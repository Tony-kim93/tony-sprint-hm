import axios from '../libraries/axios/index';

export const IP = 'https://api.ipify.org?format=json';

//saga API
export function getMainPageCard(props: any) {
  console.log(props.limit);
  console.log(props.pageSet);
  console.log(props.value);
  return axios.get(
    `/breeds?limit=${props.limit}&page=${props.pageSet}&order=${props.value}`
  );
}

export function getMainSearchCard(query: any) {
  return axios.get(`/images/search?${query}`);
}

//votes API
export function getVotes(query: any) {
  return axios.get(`/votes?sub_id=${query}`);
}

export function deleteVotes(query: any) {
  return axios.delete(`/votes/${query}`);
}

export function sendLikeVotes(body: any) {
  return axios.post('/votes', body);
}

//favourite API
export function getFavourites(query: any) {
  return axios.get(`/favourites?sub_id=${query}`);
}

export function sendFavourites(body: any) {
  return axios.post('/favourites', body);
}

export function deleteFavourites(query: any) {
  return axios.delete(`/favourites/${query}`);
}

//images API
export function getLikedImg(query: string) {
  return axios.get(`/images/${query}`);
}

export function getLikedAllImg(query: any) {
  return axios.get(`/images?${query}`);
}

export function deleteUploadImg(query: any) {
  return axios.delete(`/images/${query}`);
}
