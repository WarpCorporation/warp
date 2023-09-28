import { S } from './styled';

type PropsType = {
  title: string;
};

const Header = (props: PropsType) => {
  const { title } = props;

  return (
    <S.Wrap>
      <span>{title}</span>
    </S.Wrap>
  );
};

export default Header;
