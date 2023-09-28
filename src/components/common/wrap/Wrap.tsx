import { ReactNode, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { S } from './styled';
import { getBackgroundColor } from 'util/';
import { last } from 'lodash';

type PropsType = {
  children: ReactNode;
};

const Wrap = (props: PropsType) => {
  const { children } = props;
  const { pathname } = useLocation();
  const overflowAllowedPaths = useMemo(() => ['leadership', 'partnership', 'press-media'], []);

  return (
    <S.Wrap
      backgroundColor={getBackgroundColor(pathname)}
      allowOverflow={overflowAllowedPaths.includes(last(pathname.split('/')) ?? '')}
    >
      {children}
    </S.Wrap>
  );
};

export default Wrap;
