import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as S from './styled';
import introBg from 'assets/background/intro-bg.png';

const Intro = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const navigateToMain = () => {
    navigate('/main');
  };

  const handleKoreanClick = () => {
    i18n.changeLanguage('kr');
    navigateToMain();
  };

  const handleEnglishClick = () => {
    i18n.changeLanguage('en');
    navigateToMain();
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
