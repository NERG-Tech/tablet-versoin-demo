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
  name: string;
  sex: string;
  age: number;
  position: string;
  sport: string;
  bmi: number;
  height: THeight;
  weight: TWeight;
  rmr: TRmr;
  bloodVolumn: TBloodVolumn;
  adjustedBodyWeight: TAdjustedBodyWeight;
  bodyWaterWeight: TBodyWaterWeight;
  idealWeight: TIdealWeight;
  leanBodyMass: TLeanBodyMass;
};
