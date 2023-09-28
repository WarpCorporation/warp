import { palette } from 'constants/';
import { last } from 'lodash';

const getBackgroundColor = (pathname: string) => {
  const backgroundColorMap: Record<string, string> = {
    '/': palette.black,
    main: palette.black,
    'brand-story': palette.black,
  };
  return backgroundColorMap[last(pathname.split('/')) ?? '/'];
};

export default getBackgroundColor;
