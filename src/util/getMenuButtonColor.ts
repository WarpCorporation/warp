import { palette } from 'constants/';
import { last } from 'lodash';

const getMenuButtonColor = (pathname: string) => {
  const colorMap: Record<string, string> = {
    '/': palette.magenta,
    main: palette.magenta,
    'brand-story': palette.magenta,
    'jackpot-fc': palette.magenta,
    leadership: palette.white,
    partnership: palette.white,
    'press-media': palette.white,
  };
  return colorMap[last(pathname.split('/')) ?? '/'] ?? palette.black;
};

export default getMenuButtonColor;
