import * as S from './styled';
import introBg from 'assets/background/intro-bg.png';

const Intro = () => {
  return (
    <S.Wrap>
      <S.Background src={introBg} alt='intro-bg' />
      <S.ButtonsGroup>
        <S.LanguageButton>KOR</S.LanguageButton>
        <S.LanguageButton>ENG</S.LanguageButton>
      </S.ButtonsGroup>
    </S.Wrap>
  );
};

export default Intro;
