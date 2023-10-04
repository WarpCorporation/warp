import { CSC } from 'components/common/styled';
import { S } from './styled';
import { useTranslation } from 'react-i18next';
import { useImageQuery } from 'lib';
import IntroText from './IntroText';
import mainIntroBg from 'assets/background/main/main-bg.png';

const Intro = () => {
  const { i18n } = useTranslation();
  const isKorean = i18n.language === 'kr';
  const [mainBg] = useImageQuery(['main-intro', [mainIntroBg]]);

  return (
    <CSC.PageWrap>
      <CSC.Background src={mainBg} alt='main-intro-bg' />
      <S.TextWrap>
        <IntroText isKorean={isKorean} />
      </S.TextWrap>
    </CSC.PageWrap>
  );
};

export default Intro;
