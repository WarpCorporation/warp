import * as S from './styled';
import introBg from 'assets/background/intro-bg.png';
import { i18n } from 'language/i18n';

const Intro = () => {
  const handleKoreanClick = () => {
    i18n.locale = 'kr';
  };

  const handleEnglishClick = () => {
    i18n.locale = 'en';
  };

  return (
    <S.Wrap>
      <S.Background src={introBg} alt='intro-bg' />
      <S.ButtonsGroup>
        <S.LanguageButton onClick={handleKoreanClick}>
          <span>KOR</span>
        </S.LanguageButton>
        <S.LanguageButton onClick={handleEnglishClick}>
          <span>ENG</span>
        </S.LanguageButton>
      </S.ButtonsGroup>
    </S.Wrap>
  );
};

export default Intro;
