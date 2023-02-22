import axios from 'axios';

const apiUrl = 'https://us-central1-nerg-one.cloudfunctions.net/api';

export type TWaistAndHip = {
  waist: number;
  hip: number;
};

export const addWaistAndHip = async (props: TWaistAndHip) => {
  const url = `${apiUrl}/player/wh`;
  const res = await axios.post(url, props);

  return Promise.resolve(res.data);
};

export const getVo2 = async (pulse: number) => {
  const url = `${apiUrl}/player/vo2`;
  const res = await axios.post(url, {pulse});

  return Promise.resolve(res.data);
};

export type TMet = {
  minutes: number;
  seconds: number;
};

export const getMET = async (props: TMet) => {
  const url = `${apiUrl}/player/met`;
  const res = await axios.post(url, props);

  return Promise.resolve(res.data);
};

export type TKeyMeasurement = {
  neckCircumference: number;
  wingSpan: number;
  handSize: number;
  hipsCircumference: number;
  gluteCircumference: number;
  waistCircumference: number;
};

export const getKeyMeasurements = async (props: TKeyMeasurement) => {
  const url = `${apiUrl}/player/key`;
  const res = await axios.post(url, props);

  return Promise.resolve(res.data);
};

export const authService = {
  addWaistAndHip,
  getVo2,
  getMET,
  getKeyMeasurements,
};
