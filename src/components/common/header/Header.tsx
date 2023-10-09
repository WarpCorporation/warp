import { useRecoilValue } from 'recoil';
import { atom } from 'recoil/atom';
import { S } from './styled';

type PropsType = {
  title: string;
};

const Header = (props: PropsType) => {
  const { title } = props;
  const { type } = useRecoilValue(atom.screen);

  return (
    <>
      <S.DummySpace type={type} />
      <S.Content type={type}>{type === 'pc' && <span>{title}</span>}</S.Content>
    </>
  );
};

export default Header;
