import { ReactNode, RefCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { S } from './styled';
import { getBackgroundColor } from 'util/';
import { last } from 'lodash';

type PropsType = {
  wrapRef: RefCallback<Element>;
  children: ReactNode;
};

const Wrap = (props: PropsType) => {
  const { wrapRef, children } = props;
  const { pathname } = useLocation();
  const overflowAllowedPaths = useMemo(() => ['leadership', 'partnership', 'press-media'], []);

  return (
    <S.Wrap
      ref={wrapRef}
      backgroundColor={getBackgroundColor(pathname)}
      allowOverflow={overflowAllowedPaths.includes(last(pathname.split('/')) ?? '')}
    >
      {children}
    </S.Wrap>
  );
};

export default Wrap;
