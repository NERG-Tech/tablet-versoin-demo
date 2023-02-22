import axios from 'axios';

const apiUrl = 'https://us-central1-nerg-one.cloudfunctions.net/api';

export type TWaistAndHip = {
  waist: number;
  hip: number;
};

export const getWaistAndHip = async (props: TWaistAndHip) => {
  try {
    const url = `${apiUrl}/player/wh`;
    const res = await axios.post(url, props);

    return Promise.resolve(res.data);
  } catch (err) {
    console.log('getWaistAndHip Error: ', err);
  }
};

export const getVo2 = async (pulse: number) => {
  try {
    const url = `${apiUrl}/player/vo2`;
    const res = await axios.post(url, {pulse});

    return Promise.resolve(res.data);
  } catch (err) {
    console.log('getVo2 Error: ', err);
  }
};

export type TMet = {
  minutes: number;
  seconds: number;
};

export const getMET = async (props: TMet) => {
  try {
    const url = `${apiUrl}/player/met`;
    const res = await axios.post(url, props);

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

export const getKeyMeasurements = async (props: TKeyMeasurement) => {
  try {
    const url = `${apiUrl}/player/key`;
    const res = await axios.post(url, props);

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
