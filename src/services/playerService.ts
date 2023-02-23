import axios from 'axios';

const apiUrl = 'https://us-central1-nerg-one.cloudfunctions.net/api';

export type TAddPlayer = {
  sex: string;
  age: number;
  weight: number;
  height: number;
  name: string;
  sport: string;
  position: string;
  accessToken: string | undefined;
};

export type TToken = {
  accessToken: string;
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
      console.log('addPlayer Error: ', err);
    }
  } else {
    return Promise.reject('no access');
  }
};

export const getPlayer = async (accessToken: TToken) => {
  if (accessToken) {
    try {
      const url = `${apiUrl}/player/${accessToken.accessToken}`;
      const options = {
        method: 'GET',
        url: url,
      };
      const res = await axios.request(options);

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
};
