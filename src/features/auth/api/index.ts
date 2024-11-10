import axios from '@/service/axios';
import { AuthData } from './type';

export const login = async (data: AuthData) => {
  const url = '/users/login';
  return await axios.post(url, data);
};

export const createUser = async (data: AuthData) => {
  const url = '/users/create';
  return await axios.post(url, data);
};
