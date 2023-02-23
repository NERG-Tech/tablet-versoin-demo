import axios from 'axios';

const apiUrl = 'https://us-central1-nerg-one.cloudfunctions.net/api';

export type TWaistAndHip = {
  waist: number;
  hip: number;
  idToken: string;
};

export const getWaistAndHip = async (params: TWaistAndHip) => {
  try {
    const url = `${apiUrl}/player/wh`;
    const res = await axios.post(url, params);

    return Promise.resolve(res.data);
  } catch (err) {
    console.log('getWaistAndHip Error: ', err);
  }
};

export type TVo2 = {
  pulse: number;
  idToken: string;
};

export const getVo2 = async (params: TVo2) => {
  try {
    const url = `${apiUrl}/player/vo2`;
    const res = await axios.post(url, params);

    return Promise.resolve(res.data);
  } catch (err) {
    console.log('getVo2 Error: ', err);
  }
};

export type TMet = {
  minutes: number;
  seconds: number;
  idToken: string;
};

export const getMET = async (params: TMet) => {
  try {
    const url = `${apiUrl}/player/met`;
    const res = await axios.post(url, params);

    return Promise.resolve(res.data);
  } catch (err) {
    console.log('getMET Error: ', err);
  }
};

export type TKeyMeasurement = {
  neckCircumference: number;
  wingSpan: number;
  handSize: number;
  hipsCircumference: number;
  gluteCircumference: number;
  waistCircumference: number;
};

export const getKeyMeasurements = async (params: TKeyMeasurement) => {
  try {
    const url = `${apiUrl}/player/key`;
    const res = await axios.post(url, params);

    return Promise.resolve(res.data);
  } catch (err) {
    console.log('getKeyMeasurements Error: ', err);
  }
};

export const authService = {
  getWaistAndHip,
  getVo2,
  getMET,
  getKeyMeasurements,
};
