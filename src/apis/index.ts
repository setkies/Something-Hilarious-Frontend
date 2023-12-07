import axios from 'axios';

export const customAxios = axios.create({
  baseURL: 'http://sinp.kro.kr/api',
});
