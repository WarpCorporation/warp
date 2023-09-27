import { S } from './styled';

const Menu = () => {
  return (
    <S.Wrap>
      <S.Logo />
      <S.Line />
      <S.ButtonsGroup>
        <S.Button variant='text'>BRAND STORY</S.Button>
        <S.Button variant='text'>JACKPOT FC</S.Button>
        <S.Button variant='text'>LEADERSHIP</S.Button>
        <S.Button variant='text'>PARTNERSHIP</S.Button>
        <S.Button variant='text'>PRESS · MEDIA</S.Button>
      </S.ButtonsGroup>
    </S.Wrap>
  );
};

export default Menu;
