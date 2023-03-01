import axios from 'axios';

const apiUrl = 'https://us-central1-nerg-one.cloudfunctions.net/api';

export type TWaistAndHipData = {
  waist: number;
  hip: number;
};

export type TWaistAndHip = TWaistAndHipData & {
  idToken: string | undefined;
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

export type TVo2Data = {
  pulse: number;
};

export type TVo2 = TVo2Data & {
  idToken: string | undefined;
};

export const getVo2 = async (params: TVo2) => {
  try {
    const url = `${apiUrl}/player/vo2`;
    const res = await axios.post(url, params);

    return Promise.resolve(res.data);
  } catch (err) {
    console.log('addVo2 Error: ', err);
    return Promise.reject(err);
  }
};

export type TMetData = {
  minutes: number;
  seconds: number;
};

export type TMet = TMetData & {
  idToken: string | undefined;
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

export type TGeneticsData = {
  ethnicity: string;
  complexion: string;
  bloodType: string;
};

export type TGenetics = TGeneticsData & {
  idToken: string | undefined;
};

export const addGenetics = async (params: TGenetics) => {
  try {
    const url = `${apiUrl}/player/genetic`;
    const res = await axios.post(url, params);

    return Promise.resolve(res.data);
  } catch (err) {
    console.log('addGenetics Error: ', err);
    return Promise.reject(err);
  }
};

export type TKeyMeasurementData = {
  neckCircumference: number;
  wingSpan: number;
  handSize: number;
  hipsCircumference: number;
  gluteCircumference: number;
  waistCircumference: number;
};

export type TKeyMeasurement = TKeyMeasurementData & {
  idToken: string | undefined | undefined;
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
  getVo2,
  getMET,
  addGenetics,
  addKeyMeasurements,
};
