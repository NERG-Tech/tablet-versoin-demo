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

export const addPlayer = async (props: TAddPlayer) => {
  const url = `${apiUrl}/player`;
  if (props.accessToken) {
    try {
      const res = await axios.post(url, {
        ...props,
        headers: {authorization: `Bearer ${props.accessToken}`},
      });
      console.log('service: ', res);
      return Promise.resolve(res.data);
    } catch (err) {
      console.log('addPlayer Error: ', err);
    }
  } else {
    return Promise.reject('no access');
  }
};

export const getPlayer = async () => {
  const url = `${apiUrl}/player`;
  const res = await axios.get(url, {});

  return Promise.resolve(res.data);
};

export const authService = {
  addPlayer,
  getPlayer,
};
