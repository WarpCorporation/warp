import { selector as s, type DefaultValue } from 'recoil';
import { atom, type ScreenAtomType } from './atom';

export const selector = {
  screen: s<ScreenAtomType>({
    key: 'screen',
    get: ({ get }) => get(atom.screen),
    set: ({ set }, newScreenInfo: Partial<ScreenAtomType> | DefaultValue) => {
      set(atom.screen, (prev) => ({ ...prev, ...newScreenInfo }));
    },
  }),
};
