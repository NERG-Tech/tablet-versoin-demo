import axios from 'axios';
import {THeightFeet} from '../redux/types/player';

const apiUrl = 'https://us-central1-nerg-one.cloudfunctions.net/api';

export type TAddPlayer = {
  sex: string;
  age: number;
  weight: number;
  height: THeightFeet;
  name: string;
  sport: string;
  position: string;
  accessToken: string | undefined;
};

export const addPlayer = async (params: TAddPlayer) => {
  const url = `${apiUrl}/player`;
  if (params.accessToken) {
    try {
      const res = await axios.post(url, {
        ...params,
        idToken: params.accessToken,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  } else {
    return Promise.reject('no access');
  }
};

export type TToken = {
  accessToken: string;
};

export const getPlayer = async (params: TToken) => {
  if (params) {
    try {
      const url = `${apiUrl}/player`;
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${params.accessToken}`,
        },
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  } else {
    return Promise.reject('no access');
  }
};

export const updatePlayer = async (params: TAddPlayer) => {
  const url = `${apiUrl}/player`;
  if (params.accessToken) {
    try {
      const res = await axios.put(url, {
        ...params,
        idToken: params.accessToken,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  } else {
    return Promise.reject('no access');
  }
};

export const authService = {
  addPlayer,
  getPlayer,
  updatePlayer,
};
