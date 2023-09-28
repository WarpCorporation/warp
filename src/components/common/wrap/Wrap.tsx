import { ReactNode, useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { S } from './styled';
import { palette } from 'constants/';
import { last } from 'lodash';

type PropsType = {
  children: ReactNode;
};

const Wrap = (props: PropsType) => {
  const { children } = props;
  const [lastPath, setLastPath] = useState<string>('/');
  const { pathname } = useLocation();
  const backgroundColorMap = useMemo<Record<string, string>>(
    () => ({
      '/': palette.black,
      main: palette.black,
      'brand-story': palette.black,
    }),
    []
  );

  useEffect(() => {
    const newLastPath = last(pathname.split('/'));
    setLastPath(newLastPath || '/');
  }, [pathname]);

  return (
    <S.Wrap backgroundColor={backgroundColorMap[lastPath] ?? palette.black}>{children}</S.Wrap>
  );
};

export default Wrap;
