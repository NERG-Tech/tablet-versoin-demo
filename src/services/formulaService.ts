import axios from 'axios';

const apiUrl = 'https://us-central1-nerg-one.cloudfunctions.net/api';

export type TWaistAndHip = {
  waist: number;
  hip: number;
  idToken: string;
};

export const addWaistAndHip = async (params: TWaistAndHip) => {
  try {
    const url = `${apiUrl}/player/wh`;
    const res = await axios.post(url, params);

    return Promise.resolve(res.data);
  } catch (err) {
    console.log('addWaistAndHip Error: ', err);
    return Promise.reject(err);
  }
};

export type TVo2 = {
  pulse: number;
  idToken: string;
};

export const addVo2 = async (params: TVo2) => {
  try {
    const url = `${apiUrl}/player/vo2`;
    const res = await axios.post(url, params);

    return Promise.resolve(res.data);
  } catch (err) {
    console.log('addVo2 Error: ', err);
    return Promise.reject(err);
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
    return Promise.reject(err);
  }
};

export type TGenetics = {
  ethnicity: string;
  complexion: string;
  bloodType: string;
  idToken: string;
};

export const getGenetics = async (params: TMet) => {
  try {
    const url = `${apiUrl}/player/genetic`;
    const res = await axios.post(url, params);

    return Promise.resolve(res.data);
  } catch (err) {
    console.log('getGenetics Error: ', err);
    return Promise.reject(err);
  }
};

export type TKeyMeasurement = {
  neckCircumference: number;
  wingSpan: number;
  handSize: number;
  hipsCircumference: number;
  gluteCircumference: number;
  waistCircumference: number;
  idToken: string;
};

export const addKeyMeasurements = async (params: TKeyMeasurement) => {
  try {
    const url = `${apiUrl}/player/key`;
    const res = await axios.post(url, params);

    return Promise.resolve(res.data);
  } catch (err) {
    console.log('addKeyMeasurements Error: ', err);
    return Promise.reject(err);
  }
};

export const authService = {
  addWaistAndHip,
  addVo2,
  getMET,
  getGenetics,
  addKeyMeasurements,
};
