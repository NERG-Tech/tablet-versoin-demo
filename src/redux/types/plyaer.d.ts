export type THeightFeet = {feet: number; inch: number};
export type THeight = {cm: number; mt: number; feet: THeightFeet};
export type TWeight = {kg: number; pounds: number};

export type TAdjustedBodyWeight = {kg: number; pounds: number};
export type TBloodVolumn = {value: number; unit: string};
export type TBodyWaterWeight = {kg: number; pounds: number};
export type TIdealWeight = {kg: number; pounds: number};
export type TLeanBodyMass = {kg: number; pounds: number};
export type TRmr = {value: number; unit: string};

export type TPlayerInfo = {
  age: number;
  bmi: number;
  sex: string;
  height: THeight;
  weight: TWeight;
  adjustedBodyWeight: TAdjustedBodyWeight;
  bloodVolumn: TBloodVolumn;
  bodyWaterWeight: TBodyWaterWeight;
  idealWeight: TIdealWeight;
  leanBodyMass: TLeanBodyMass;
  name: string;
  position: string;
  rmr: TRmr;
  sport: string;
};
