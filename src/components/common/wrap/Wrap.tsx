import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { S } from './styled';
import { getBackgroundColor } from 'util/';

type PropsType = {
  children: ReactNode;
};

const Wrap = (props: PropsType) => {
  const { children } = props;
  const { pathname } = useLocation();

  return <S.Wrap backgroundColor={getBackgroundColor(pathname)}>{children}</S.Wrap>;
};

export default Wrap;
