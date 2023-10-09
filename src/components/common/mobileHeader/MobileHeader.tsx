import { useRecoilValue } from 'recoil';
import { atom } from 'recoil/atom';
import { S } from './styled';

type PropsType = {
  title: string;
  marginOffset?: number;
};

const MobileHeader = (props: PropsType) => {
  const { title, marginOffset = 0 } = props;
  const { type } = useRecoilValue(atom.screen);

  if (type !== 'mobile') return <></>;

  return (
    <S.Wrap marginOffset={marginOffset}>
      <S.Header>{title}</S.Header>
      <S.HeaderDivider />
    </S.Wrap>
  );
};

export default MobileHeader;
