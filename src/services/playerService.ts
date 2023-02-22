import axios from 'axios';

const apiUrl = 'https://us-central1-nerg-one.cloudfunctions.net/api';

type TAddPlayer = {
  sex: string;
  age: number;
  weight: number;
  height: number;
  name: string;
  sport: string;
  position: string;
  accessToken: string;
};

export const addPlayer = async (props: TAddPlayer) => {
  const url = `${apiUrl}/player`;
  const res = await axios.post(url, {
    ...props,
    headers: {authorization: `Bearer ${props.accessToken}`},
  });

  return Promise.resolve(res.data);
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
