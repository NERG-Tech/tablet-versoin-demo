import {Dimensions} from 'react-native';

export const BASIC_WIDTH = 1280;
export const BASIC_HEIGHT = 844;
export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export const orientation = {
  WIDTH: 'width',
  HEIGHT: 'height',
} as const;

export const normalize = (value: number, mode: string = orientation.WIDTH) =>
  mode === orientation.WIDTH
    ? Math.round((value * SCREEN_WIDTH) / BASIC_WIDTH)
    : Math.round((value * SCREEN_HEIGHT) / BASIC_HEIGHT);

export const normalizeRate = (value: number, rate: number) =>
  SCREEN_WIDTH < 1024 ? Math.round(value * rate) : value;

export const normalizeHalf = (value: number) =>
  SCREEN_WIDTH < 1024 ? Math.round(value / 2) : value;

export const normalizeQuarter = (value: number) =>
  SCREEN_WIDTH < 1024 ? Math.round(value / 4) : value;

export default {
  normalize,
  normalizeRate,
  normalizeHalf,
  normalizeQuarter,
};
