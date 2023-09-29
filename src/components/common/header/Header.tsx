import { S } from './styled';

type PropsType = {
  title: string;
};

const Header = (props: PropsType) => {
  const { title } = props;

  return (
    <>
      <S.DummySpace />
      <S.Content>
        <span>{title}</span>
      </S.Content>
    </>
  );
};

export default Header;
