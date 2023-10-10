import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { atom } from 'recoil/atom';
import { useTranslation } from 'react-i18next';
import { CSC } from 'components/common/styled';
import { S } from './styled';
import { screen } from 'constants/';
import introBg from 'assets/background/intro/intro-bg.png';
import introMobileBg from 'assets/background/intro/intro-mobile-bg.png';

type PropsType = {
  handlePageChange: (newStatus: boolean) => void;
};

const Intro = (props: PropsType) => {
  const { handlePageChange } = props;
  const navigate = useNavigate();
  const { type } = useRecoilValue(atom.screen);
  const { i18n } = useTranslation();

  const navigateToMain = () => {
    handlePageChange(true);
    setTimeout(() => {
      navigate('/main');
    }, 1000);
    setTimeout(() => {
      handlePageChange(false);
    }, 5000);
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
      <CSC.Background
        src={type === 'mobile' ? introMobileBg : introBg}
        alt='intro-bg'
        minWidth={screen.minWidth}
      />
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
