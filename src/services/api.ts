import axios, { AxiosInstance } from 'axios';
// https://www.googleapis.com/books/v1/volumes?q=собаки+subject:medical
const BACKEND_URL = 'https://www.googleapis.com/books/v1/volumes'
const REQUEST_TIMEOUT = 10000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });
  return api;
};
