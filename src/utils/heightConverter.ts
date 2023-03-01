import {THeight} from '../redux/types/player';

export const height2Data = (height: string) => {
  if (height.indexOf(' ') !== -1) {
    const values = height.split(' ');
    const data = {
      feet: parseInt(values[0]),
      inch: parseInt(values[1]),
    };
    return data;
  } else {
    const feet = height.slice(0, 1);
    const inch = height.slice(1);
    const data = {
      feet: parseInt(feet),
      inch: parseInt(inch),
    };
    return data;
  }
};

export const data2Height = (data: THeight) => {
  return data.feet.feet + '’ ' + data.feet.inch + '”';
};

export default {
  height2Data,
  data2Height,
};
