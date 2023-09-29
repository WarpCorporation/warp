import { palette } from 'constants/';
import { last } from 'lodash';

const getBackgroundColor = (pathname: string) => {
  const backgroundColorMap: Record<string, string> = {
    '/': palette.black,
    main: palette.black,
    'brand-story': palette.black,
    'jackpot-fc': palette.black,
    leadership: 'transparent',
    partnership: 'transparent',
  };
  return backgroundColorMap[last(pathname.split('/')) ?? '/'] ?? palette.black;
};

export default getBackgroundColor;
