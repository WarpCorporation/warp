import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CSC } from 'components/common/styled';
import { S } from './styled';
import introBg from 'assets/background/intro/intro-bg.png';

const Intro = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const navigateToMain = () => {
    navigate('/main');
  };

  const handleKoreanClick = () => {
    i18n.changeLanguage('kr');
    sessionStorage.setItem('@warp_language', 'kr');
    navigateToMain();
  };

  const handleEnglishClick = () => {
    i18n.changeLanguage('en');
    sessionStorage.setItem('@warp_language', 'en');
    navigateToMain();
  };

  return (
    <CSC.PageWrap>
      <CSC.Background src={introBg} alt='intro-bg' />
      <S.ButtonsGroup>
        <S.LanguageButton onClick={handleKoreanClick}>
          <span>KOR</span>
        </S.LanguageButton>
        <S.LanguageButton onClick={handleEnglishClick}>
          <span>ENG</span>
        </S.LanguageButton>
      </S.ButtonsGroup>
    </CSC.PageWrap>
  );
};

export default Intro;
