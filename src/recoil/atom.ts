import { atom as a } from 'recoil';

export const atom = {
  screen: a<ScreenAtomType>({ key: 'screen', default: { width: 1920, type: 'pc' } }),
};

export type ScreenAtomType = { width: number; type: ScreenType };

export type ScreenType = 'pc' | 'tablet' | 'mobile';
